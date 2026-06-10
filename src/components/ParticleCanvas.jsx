import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported, falling back to 2D.');
      return;
    }

    // Vertex Shader Source
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader Source - Dynamic Fluid Neon Wave design
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

        // Animated slow time coefficient
        float t = u_time * 0.12;

        // Interactive mouse coordinate tracking
        vec2 m = (u_mouse - 0.5) * vec2(aspect, 1.0);
        float mouseDist = length(p - m);
        float mouseForce = smoothstep(0.35, 0.0, mouseDist) * 0.1;
        p += normalize(p - m + 0.001) * mouseForce;

        // Dual orbiting fluid neon energy blobs
        vec2 orbit1 = vec2(sin(t * 1.2) * 0.4, cos(t * 0.9) * 0.25);
        vec2 orbit2 = vec2(cos(t * 0.8) * 0.35, sin(t * 1.4) * 0.3);

        float dist1 = length(p - orbit1);
        float dist2 = length(p - orbit2);

        // Soft, glowing falloff
        float glow1 = 0.06 / (dist1 + 0.16);
        float glow2 = 0.06 / (dist2 + 0.16);

        // High-end Brand Colors (Blue #00A3FF, Purple #8B5CF6)
        vec3 colBlue = vec3(0.0, 0.64, 1.0);
        vec3 colPurple = vec3(0.55, 0.36, 0.96);

        // Mix colors and apply glows
        vec3 finalColor = colBlue * glow1 + colPurple * glow2;

        // Add a faint grid highlight
        float gridX = abs(fract(p.x * 12.0 - 0.5) - 0.5);
        float gridY = abs(fract(p.y * 12.0 - 0.5) - 0.5);
        float grid = smoothstep(0.012, 0.0, min(gridX, gridY)) * 0.008;
        finalColor += vec3(grid);

        // Add dark organic ambient glow fallback
        finalColor += vec3(0.02, 0.04, 0.09) * (1.0 - length(p) * 0.6);

        // Output with highly balanced opacity for subtle background blending
        gl_FragColor = vec4(finalColor, 0.06);
      }
    `;

    // Shader compiler helper
    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    // Create and link program
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full-screen quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform bindings
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    // Mouse listener
    const onMouseMove = (e) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - (e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Aspect and display resizer
    const resize = () => {
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let startTime = performance.now();
    let animId;

    const render = (now) => {
      resize();

      const time = (now - startTime) / 1000.0;

      // Mouse easing
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(mouseLoc, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
}
