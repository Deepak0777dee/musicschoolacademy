import os
import re

BASE_DIR = r"c:\Users\D-ROCK\Desktop\musicschoolacademy"

# 1. Update courses.html
courses_path = os.path.join(BASE_DIR, "courses.html")
with open(courses_path, "r", encoding="utf-8") as f: content = f.read()
if "A Day in the Life" not in content:
    courses_addition = """
<section class="section section-cream">
  <div class="container">
    <span class="section-label">Experience Stackly</span>
    <h2 class="section-title text-center">A Day in the Life</h2>
    <p class="section-subtitle text-center" style="max-width:700px;margin:0 auto 3rem;">From morning theory classes to evening recital practices, see what it's like to be part of our vibrant musical community.</p>
    <div style="border-radius:var(--radius-2xl);overflow:hidden;position:relative;box-shadow:var(--shadow-xl);height:500px;" class="parallax-container">
      <img src="images/day_in_life.webp" alt="Day in the Life" class="parallax-img" style="width:100%;height:130%;object-fit:cover;position:absolute;top:-15%;" />
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);padding:3rem 2rem 2rem;color:#fff;">
        <h3 style="color:#fff;font-size:1.8rem;margin-bottom:0.5rem;">Immersive Learning</h3>
        <p style="font-size:1rem;opacity:0.9;">Our campus is alive with music from dawn till dusk.</p>
      </div>
    </div>
  </div>
</section>
"""
    content = content.replace('<section class="cta-section', courses_addition + '<section class="cta-section')
    with open(courses_path, "w", encoding="utf-8") as f: f.write(content)

# 2. Update tutors.html
tutors_path = os.path.join(BASE_DIR, "tutors.html")
with open(tutors_path, "r", encoding="utf-8") as f: content = f.read()
if "Featured Masterclass" not in content:
    tutors_addition = """
<section class="section section-alt">
  <div class="container">
    <div class="split-grid align-center">
      <div class="split-content stagger-children">
        <span class="section-label">Featured Masterclass</span>
        <h2 class="section-title" style="font-size:2.8rem;line-height:1.2;">"True artistry begins where technique ends."</h2>
        <p style="font-size:1.1rem;color:var(--text-secondary);margin-top:1.5rem;line-height:1.6;">Our senior faculty brings decades of international performance experience directly into the practice room. We believe in mentorship that goes beyond reading notes on a page.</p>
        <div style="margin-top:2rem;display:flex;align-items:center;gap:1rem;">
          <div style="width:50px;height:50px;border-radius:50%;background:var(--wms-yellow);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:1.2rem;">EB</div>
          <div>
            <div style="font-weight:700;color:var(--wms-dark);">Eleanor Brooks</div>
            <div style="font-size:0.85rem;color:var(--text-muted);">Head of Piano Studies</div>
          </div>
        </div>
      </div>
      <div class="split-image" style="position:relative;">
        <div style="position:absolute;top:-2rem;right:-2rem;bottom:2rem;left:2rem;background:var(--wms-yellow);border-radius:var(--radius-xl);z-index:0;"></div>
        <img src="images/masterclass.webp" alt="Masterclass" style="width:100%;border-radius:var(--radius-lg);position:relative;z-index:1;box-shadow:var(--shadow-lg);" class="scale-reveal" />
      </div>
    </div>
  </div>
</section>
"""
    content = content.replace('<footer', tutors_addition + '<footer')
    with open(tutors_path, "w", encoding="utf-8") as f: f.write(content)

# 3. Update events.html
events_path = os.path.join(BASE_DIR, "events.html")
with open(events_path, "r", encoding="utf-8") as f: content = f.read()
if "Past Event Highlights" not in content:
    events_addition = """
<section class="section" style="overflow:hidden;">
  <div class="container">
    <span class="section-label">Gallery</span>
    <h2 class="section-title">Past Event Highlights</h2>
  </div>
  <div class="horizontal-scroll-wrapper" style="margin-top:2rem;padding-left:max(5%, calc((100vw - 1200px)/2));display:flex;gap:2rem;overflow-x:auto;padding-bottom:2rem;scrollbar-width:none;">
    <div style="min-width:600px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);position:relative;" class="h-card">
      <img src="images/event_gallery1.webp" alt="Concert" style="width:100%;height:350px;object-fit:cover;" />
      <div style="position:absolute;bottom:0;left:0;right:0;padding:2rem;background:linear-gradient(transparent, rgba(0,0,0,0.8));color:#fff;">
        <h4 style="color:#fff;margin-bottom:0.2rem;">Spring Recital 2023</h4>
        <p style="font-size:0.9rem;opacity:0.8;">Standing ovation for our violin soloist</p>
      </div>
    </div>
    <div style="min-width:600px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md);position:relative;" class="h-card">
      <img src="images/hero_events.webp" alt="Orchestra" style="width:100%;height:350px;object-fit:cover;" />
      <div style="position:absolute;bottom:0;left:0;right:0;padding:2rem;background:linear-gradient(transparent, rgba(0,0,0,0.8));color:#fff;">
        <h4 style="color:#fff;margin-bottom:0.2rem;">Youth Symphony Gala</h4>
        <p style="font-size:0.9rem;opacity:0.8;">Our combined string and wind orchestra</p>
      </div>
    </div>
    <div style="min-width:400px;display:flex;align-items:center;justify-content:center;background:var(--wms-cream);border-radius:var(--radius-lg);border:2px dashed var(--wms-yellow);">
      <div style="text-align:center;color:var(--wms-dark);font-weight:600;">
        <div style="font-size:2rem;margin-bottom:0.5rem;">📸</div>
        View Full Gallery
      </div>
    </div>
  </div>
</section>
"""
    content = content.replace('<footer', events_addition + '<footer')
    with open(events_path, "w", encoding="utf-8") as f: f.write(content)

# 4. Update pricing.html
pricing_path = os.path.join(BASE_DIR, "pricing.html")
with open(pricing_path, "r", encoding="utf-8") as f: content = f.read()
if "The Stackly Value" not in content:
    pricing_addition = """
<section class="section section-cream">
  <div class="container text-center">
    <span class="section-label">Why Choose Us</span>
    <h2 class="section-title">The Stackly Value</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:2rem;margin-top:3rem;" class="stagger-children">
      <div style="background:#fff;padding:2rem;border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);border:1px solid #eaeaea;" class="float-icon-card">
        <div style="font-size:2.5rem;margin-bottom:1rem;" class="f-icon">🏫</div>
        <h4 style="margin-bottom:0.5rem;">Premium Facilities</h4>
        <p style="font-size:0.9rem;color:var(--text-secondary);">Acoustically treated rooms with Steinway pianos.</p>
      </div>
      <div style="background:#fff;padding:2rem;border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);border:1px solid #eaeaea;" class="float-icon-card">
        <div style="font-size:2.5rem;margin-bottom:1rem;" class="f-icon">📱</div>
        <h4 style="margin-bottom:0.5rem;">Community App</h4>
        <p style="font-size:0.9rem;color:var(--text-secondary);">Track progress and chat with tutors via our app.</p>
      </div>
      <div style="background:#fff;padding:2rem;border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);border:1px solid #eaeaea;" class="float-icon-card">
        <div style="font-size:2.5rem;margin-bottom:1rem;" class="f-icon">🎼</div>
        <h4 style="margin-bottom:0.5rem;">Digital Library</h4>
        <p style="font-size:0.9rem;color:var(--text-secondary);">Free access to thousands of digital sheet music files.</p>
      </div>
      <div style="background:#fff;padding:2rem;border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);border:1px solid #eaeaea;" class="float-icon-card">
        <div style="font-size:2.5rem;margin-bottom:1rem;" class="f-icon">🔑</div>
        <h4 style="margin-bottom:0.5rem;">Practice Access</h4>
        <p style="font-size:0.9rem;color:var(--text-secondary);">Free practice room bookings for enrolled students.</p>
      </div>
    </div>
  </div>
</section>
"""
    content = content.replace('<footer', pricing_addition + '<footer')
    with open(pricing_path, "w", encoding="utf-8") as f: f.write(content)

# 5. Update contact.html
contact_path = os.path.join(BASE_DIR, "contact.html")
with open(contact_path, "r", encoding="utf-8") as f: content = f.read()
if "Visit Our Campus" not in content:
    contact_addition = """
<section class="section" style="padding-top:0;">
  <div class="container">
    <div style="border-radius:var(--radius-2xl);overflow:hidden;position:relative;height:500px;box-shadow:var(--shadow-lg);">
      <img src="images/campus_exterior.webp" alt="Campus Exterior" style="width:100%;height:100%;object-fit:cover;" class="zoom-img" />
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(255,255,255,0.95);padding:3rem;border-radius:var(--radius-lg);text-align:center;min-width:350px;" class="fade-up-box">
        <h3 style="font-size:2rem;margin-bottom:0.5rem;color:var(--wms-dark);">Visit Our Campus</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;">123 Harmony Lane, Music District<br/>New York, NY 10012</p>
        <div style="display:flex;justify-content:center;gap:1rem;">
          <a href="#" class="btn-wms-solid">Get Directions</a>
        </div>
      </div>
    </div>
  </div>
</section>
"""
    content = content.replace('<footer', contact_addition + '<footer')
    with open(contact_path, "w", encoding="utf-8") as f: f.write(content)

print("Updated HTML files with new content sections.")
