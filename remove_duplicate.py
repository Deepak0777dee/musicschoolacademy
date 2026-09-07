import os
import glob

BASE_DIR = r"c:\Users\D-ROCK\Desktop\musicschoolacademy"

html_files = glob.glob(os.path.join(BASE_DIR, "*.html"))

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if the duplicate text exists
    if "<span>STACKLY</span>" in content:
        content = content.replace("<span>STACKLY</span>", "")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Removed duplicate text in {os.path.basename(file_path)}")
