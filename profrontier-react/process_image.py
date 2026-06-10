import sys
from PIL import Image, ImageFilter

def remove_background(image_path, output_path, threshold=40, feather_radius=2):
    # Load image and ensure RGBA
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Keep track of visited pixels
    visited = set()
    background = set()
    
    # Queue for flood fill
    queue = []
    
    # Add all boundary pixels to the queue
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(1, height - 1):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    for p in queue:
        visited.add(p)
        
    # Check if a pixel is dark (background)
    def is_dark(pixel, thresh):
        r, g, b, a = pixel
        return r < thresh and g < thresh and b < thresh
        
    # BFS flood fill to find contiguous background
    while queue:
        cx, cy = queue.pop(0)
        curr_pixel = pixels[cx, cy]
        
        # If it is dark, mark as background and explore neighbors
        if is_dark(curr_pixel, threshold):
            background.add((cx, cy))
            
            # 4-way connectivity
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # Create an alpha mask
    mask = Image.new("L", (width, height), 255)
    mask_pixels = mask.load()
    
    for x, y in background:
        mask_pixels[x, y] = 0
        
    # Feather the mask to smooth the edges
    if feather_radius > 0:
        mask = mask.filter(ImageFilter.GaussianBlur(feather_radius))
        
    # Apply the mask back to the image
    img.putalpha(mask)
    
    # Save the processed transparent PNG
    img.save(output_path, "PNG")
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    remove_background(
        "/Users/wsploffi/Desktop/FOA/profrontier-react/public/assets/graduation-cap-3d.png",
        "/Users/wsploffi/Desktop/FOA/profrontier-react/public/assets/graduation-cap-3d.png",
        threshold=35,
        feather_radius=1
    )
