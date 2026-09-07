import os

BASE_DIR = r"c:\Users\D-ROCK\Desktop\musicschoolacademy"

def add_wms_css():
    css_path = os.path.join(BASE_DIR, "css", "style.css")
    with open(css_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "/* WMS Global Styles */" not in content:
        wms_css = """
/* WMS Global Styles */
:root {
  --wms-yellow: #f5a623;
  --wms-yellow-hover: #e09612;
  --wms-cream: #fdfbf7;
  --wms-dark: #222;
  --wms-text: #444;
}

body.wms-theme {
  background-color: var(--wms-cream);
  color: var(--wms-text);
  font-family: var(--font-body);
}
body.wms-theme h1, body.wms-theme h2, body.wms-theme h3, body.wms-theme h4, body.wms-theme h5, body.wms-theme h6 {
  color: var(--wms-dark);
  font-family: var(--font-heading);
}

/* Custom Header matching reference */
.header-wms {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.header-wms .logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
.header-wms .logo-area img {
  height: 45px;
  margin-bottom: 5px;
}
.header-wms .logo-area span {
  font-weight: 800;
  color: var(--wms-yellow);
  font-size: 1.2rem;
  letter-spacing: 1px;
}
.nav-wms {
  display: flex;
  gap: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
}
.nav-wms a {
  color: var(--wms-dark);
  text-decoration: none;
  transition: color 0.3s;
}
.nav-wms a:hover, .nav-wms a.active {
  color: var(--wms-yellow);
}
.header-actions {
  display: flex;
  gap: 1rem;
}
.btn-wms-outline {
  border: 2px solid var(--wms-yellow);
  color: var(--wms-dark);
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-wms-outline:hover {
  background: var(--wms-yellow);
  color: #fff;
}
.btn-wms-solid {
  background: var(--wms-yellow);
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--wms-yellow);
  cursor: pointer;
  transition: all 0.3s;
}
.btn-wms-solid:hover {
  background: var(--wms-yellow-hover);
  border-color: var(--wms-yellow-hover);
}

/* Wavy Dividers */
.wavy-divider {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 3;
}
.wavy-divider svg {
  display: block;
  width: calc(130% + 1.3px);
  height: 60px;
}
.wavy-divider .shape-fill { fill: var(--wms-cream); }

.wavy-divider-top {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 3;
}
.wavy-divider-top svg {
  display: block;
  width: calc(130% + 1.3px);
  height: 60px;
}
.wavy-divider-top .shape-fill { fill: var(--wms-cream); }

/* Common WMS Hero */
.hero-wms {
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  color: #fff;
  background-size: cover;
  background-position: center;
  padding: 0 5%;
}
.hero-wms::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  z-index: 1;
}
.hero-wms-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}
.hero-wms-content h1 {
  color: #fff;
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 800;
}
.hero-wms-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 500;
  word-spacing: 2px;
}
"""
        with open(css_path, "a", encoding="utf-8") as f:
            f.write("\n" + wms_css)

if __name__ == "__main__":
    add_wms_css()
    print("Added WMS CSS to style.css")
