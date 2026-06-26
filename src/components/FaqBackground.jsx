import { useEffect, useRef } from 'react';

const COLORS = {
  blue: { r: 0, g: 163, b: 255 },
  cyan: { r: 56, g: 189, b: 248 },
  purple: { r: 124, g: 58, b: 237 },
  violet: { r: 168, g: 85, b: 247 },
};

function randColor() {
  const keys = Object.keys(COLORS);
  return COLORS[keys[Math.floor(Math.random() * keys.length)]];
}

function rgba({ r, g, b }, a) {
  return `rgba(${r},${g},${b},${a})`;
}

export default function FaqBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles, animId;

    /* ── Resize ──────────────────────────────────────────── */
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width = Math.round(rect.width);
      H = canvas.height = Math.round(rect.height);
      init();
    };

    /* ── Particle factory ────────────────────────────────── */
    function makeParticle(x, y) {
      const col = randColor();
      const size = 1.2 + Math.random() * 3.2;
      const isHub = Math.random() < 0.12;           // 12% are large hubs
      return {
        x: x ?? Math.random() * W,
        y: y ?? Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: isHub ? size * 2.4 : size,
        baseR: isHub ? size * 2.4 : size,
        col,
        isHub,
        phase: Math.random() * Math.PI * 2,         // pulse phase
        speed: 0.6 + Math.random() * 1.0,           // pulse speed
        alpha: 0.55 + Math.random() * 0.35,
        ring: isHub,                               // draw ring on hubs
      };
    }

    /* ── Init particles ──────────────────────────────────── */
    function init() {
      const count = Math.round((W * H) / 9000);    // density relative to area
      particles = Array.from({ length: Math.max(count, 80) }, () => makeParticle());
    }

    /* ── Draw glow circle ────────────────────────────────── */
    function drawGlow(x, y, r, col, alpha) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
      grad.addColorStop(0, rgba(col, alpha * 0.45));
      grad.addColorStop(0.4, rgba(col, alpha * 0.12));
      grad.addColorStop(1, rgba(col, 0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    /* ── Main render loop ────────────────────────────────── */
    const MAX_DIST = 160;   // line connection threshold
    const HUB_DIST = 240;   // hubs connect farther
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
    const HUB_DIST_SQ = HUB_DIST * HUB_DIST;

    let t = 0;
    function render() {
      ctx.clearRect(0, 0, W, H);

      t += 0.012;

      /* ── Update positions ── */
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        // pulse radius
        p.r = p.baseR * (1 + 0.22 * Math.sin(t * p.speed + p.phase));
      }

      /* ── Draw connections ── */
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const threshold = a.isHub ? HUB_DIST_SQ : MAX_DIST_SQ;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          const thr = b.isHub ? HUB_DIST_SQ : threshold;

          if (distSq > thr) continue;

          const dist = Math.sqrt(distSq);
          const maxD = Math.sqrt(thr);
          const alpha = (1 - dist / maxD) * 0.22;

          // Blend colours of the two endpoints
          const cr = (a.col.r + b.col.r) >> 1;
          const cg = (a.col.g + b.col.g) >> 1;
          const cb = (a.col.b + b.col.b) >> 1;

          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, rgba(a.col, alpha));
          grad.addColorStop(1, rgba(b.col, alpha));

          ctx.strokeStyle = grad;
          ctx.lineWidth = a.isHub || b.isHub ? 0.9 : 0.55;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      /* ── Draw particles ── */
      for (const p of particles) {
        const { x, y, r, col, alpha, ring, isHub } = p;

        // glow halo
        drawGlow(x, y, r, col, alpha * 0.7);

        // outer ring on hubs
        if (ring) {
          ctx.strokeStyle = rgba(col, alpha * 0.45);
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(x, y, r * 2.8, 0, Math.PI * 2);
          ctx.stroke();

          ctx.strokeStyle = rgba(col, alpha * 0.22);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(x, y, r * 4.2, 0, Math.PI * 2);
          ctx.stroke();
        }

        // core dot
        ctx.fillStyle = rgba(col, alpha);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        // bright centre
        ctx.fillStyle = rgba({ r: 255, g: 255, b: 255 }, isHub ? 0.75 : 0.55);
        ctx.beginPath();
        ctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ── Large ambient orbs (very slow, CSS-free) ── */
      const orbAlpha = 0.055 + 0.025 * Math.sin(t * 0.4);
      const ox1 = W * 0.18 + Math.sin(t * 0.15) * 40;
      const oy1 = H * 0.30 + Math.cos(t * 0.12) * 30;
      const g1 = ctx.createRadialGradient(ox1, oy1, 0, ox1, oy1, 260);
      g1.addColorStop(0, rgba(COLORS.blue, orbAlpha * 2.2));
      g1.addColorStop(0.5, rgba(COLORS.blue, orbAlpha));
      g1.addColorStop(1, rgba(COLORS.blue, 0));
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const ox2 = W * 0.82 + Math.cos(t * 0.13) * 45;
      const oy2 = H * 0.65 + Math.sin(t * 0.10) * 35;
      const g2 = ctx.createRadialGradient(ox2, oy2, 0, ox2, oy2, 220);
      g2.addColorStop(0, rgba(COLORS.purple, orbAlpha * 2.0));
      g2.addColorStop(0.5, rgba(COLORS.purple, orbAlpha));
      g2.addColorStop(1, rgba(COLORS.purple, 0));
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      const ox3 = W * 0.52 + Math.sin(t * 0.09) * 50;
      const oy3 = H * 0.15 + Math.cos(t * 0.11) * 25;
      const g3 = ctx.createRadialGradient(ox3, oy3, 0, ox3, oy3, 160);
      g3.addColorStop(0, rgba(COLORS.cyan, orbAlpha * 1.6));
      g3.addColorStop(1, rgba(COLORS.cyan, 0));
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(render);
    }

    /* ── Boot ─────────────────────────────────────────────── */
    resize();
    animId = requestAnimationFrame(render);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
        opacity: 0.55,
      }}
    />
  );
}
