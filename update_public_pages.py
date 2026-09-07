import os
import re

BASE_DIR = r"c:\Users\D-ROCK\Desktop\musicschoolacademy"

wms_header_template = """<header class="header-wms" id="mainHeader">
  <a href="index.html" class="logo-area" style="text-decoration:none;">
    <img src="images/logo-stackly.webp" alt="Stackly Logo" />
    <span>STACKLY</span>
  </a>
  <nav class="nav-wms">
    <a href="index.html">Home</a>
    <a href="courses.html"{courses_active}>About Us</a>
    <a href="tutors.html"{tutors_active}>Meet Our Tutors</a>
    <a href="events.html"{events_active}>Dates</a>
  </nav>
  <div class="header-actions">
    <a href="contact.html" class="btn-wms-outline">Contact Us</a>
    <a href="signup.html" class="btn-wms-solid">Sign Up</a>
  </div>
</header>"""

def get_header(active):
    return wms_header_template.format(
        courses_active=' class="active"' if active == 'courses' else '',
        tutors_active=' class="active"' if active == 'tutors' else '',
        events_active=' class="active"' if active == 'events' else ''
    )

pages = {
    "courses.html": {
        "active": "courses",
        "image": "hero_courses.webp",
        "title": "Stackly Music Courses",
        "subtitle": "Strings | Woodwind | Brass | Percussion | Keyboard | Voice"
    },
    "tutors.html": {
        "active": "tutors",
        "image": "hero_tutors.webp",
        "title": "Meet Our Expert Tutors",
        "subtitle": "Learn from passionate, professional musicians"
    },
    "events.html": {
        "active": "events",
        "image": "hero_events.webp",
        "title": "Upcoming Events & Dates",
        "subtitle": "Concerts | Masterclasses | Exams | Festivals"
    },
    "pricing.html": {
        "active": "pricing",
        "image": "hero-bg.webp",
        "title": "Transparent & Affordable Pricing",
        "subtitle": "Invest in your musical education"
    },
    "contact.html": {
        "active": "contact",
        "image": "hero-bg.webp",
        "title": "Let's Start a Conversation",
        "subtitle": "We're here to help you find the perfect musical path"
    },
    "404.html": {
        "active": "",
        "image": "hero-bg.webp",
        "title": "Page Not Found",
        "subtitle": "Let's get you back to making music!"
    }
}

for page_name, data in pages.items():
    file_path = os.path.join(BASE_DIR, page_name)
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 1. Replace <body> with <body class="wms-theme">
    content = content.replace("<body>", '<body class="wms-theme">')
    
    # 2. Replace the old header
    # The old header starts with <!-- Loader --> ... <div id="mobile-overlay"></div>
    # But wait, in the generated files, they don't have comments if they were from generate.py!
    # generate.py returned:
    # <!-- Loader --> ... <div id="mobile-overlay"></div>
    header_pattern = re.compile(r'<!-- Loader -->.*?(?=<section)', re.DOTALL)
    
    new_header_html = f"""<!-- Loader -->
<div id="page-loader">
  <div style="position:relative;display:flex;align-items:center;justify-content:center;">
    <div class="loader-logo"><img src="images/logo-stackly.webp" alt="Stackly" /></div>
    <div class="loader-ring"></div>
  </div>
  <div class="loader-text">Loading</div>
</div>
{get_header(data['active'])}
"""
    content = header_pattern.sub(new_header_html, content)
    
    # 3. Replace <section class="page-hero">...<div class="container">...</div></section>
    # with the new WMS hero section.
    hero_pattern = re.compile(r'<section class="page-hero">.*?</section>', re.DOTALL)
    
    new_hero = f"""<section class="hero-wms" style="background-image: url('images/{data['image']}');">
  <div class="hero-wms-content stagger-children">
    <h1>{data['title']}</h1>
    <p>{data['subtitle']}</p>
  </div>
  <div class="wavy-divider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,116.8,188.9,94.21,234.33,76.54,277.6,64.55,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
</section>"""

    if "error-page" in content: # 404 page doesn't have page-hero, it has error-page
        pass
    else:
        content = hero_pattern.sub(new_hero, content)
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Updated {page_name}")
