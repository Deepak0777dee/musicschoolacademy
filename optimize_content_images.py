from PIL import Image
import os

images_dir = r"c:\Users\D-ROCK\Desktop\musicschoolacademy\images"
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

def optimize_image(src, dst_name):
    img = Image.open(src)
    dst = os.path.join(images_dir, dst_name)
    img.thumbnail((1200, 1200))
    img.save(dst, "webp", quality=70, method=6)
    size_kb = os.path.getsize(dst) / 1024
    print(f"Saved {dst_name}: {size_kb:.2f} KB")

sources = {
    "day_in_life.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\day_in_life_1788775885465.jpg",
    "event_gallery1.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\event_gallery1_1788776044732.jpg",
    "campus_exterior.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\campus_exterior_1788776063101.jpg",
    "masterclass.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\masterclass_1788776234318.jpg"
}

for dst_name, src in sources.items():
    if os.path.exists(src):
        optimize_image(src, dst_name)
    else:
        print(f"File not found: {src}")
