from PIL import Image
import os

images_dir = r"c:\Users\D-ROCK\Desktop\musicschoolacademy\images"
if not os.path.exists(images_dir):
    os.makedirs(images_dir)

def optimize_image(src, dst_name):
    img = Image.open(src)
    dst = os.path.join(images_dir, dst_name)
    # Resize to a reasonable web dimension if too large
    img.thumbnail((1200, 1200))
    # Save as webp with high compression
    img.save(dst, "webp", quality=70, method=6)
    size_kb = os.path.getsize(dst) / 1024
    print(f"Saved {dst_name}: {size_kb:.2f} KB")

# Define sources
hero_src = r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\hero_violin_student_1788773050579.jpg"
lesson_src = r"C:\Users\D-ROCK\.gemini\antigravity-ide\brain\a1589f3f-aa32-4e2c-9024-b0c6617f4bc9\teacher_student_violin_1788773142222.jpg"

if os.path.exists(hero_src): optimize_image(hero_src, "hero-bg.webp")
if os.path.exists(lesson_src): optimize_image(lesson_src, "lesson-img.webp")
