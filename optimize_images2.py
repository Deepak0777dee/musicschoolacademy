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
    "hero_courses.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\hero_courses_1788774559708.jpg",
    "hero_tutors.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\hero_tutors_1788774572693.jpg",
    "hero_events.webp": r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\hero_events_1788774587606.jpg"
}

for dst_name, src in sources.items():
    if os.path.exists(src):
        optimize_image(src, dst_name)
    else:
        print(f"File not found: {src}")
