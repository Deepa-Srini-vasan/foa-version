import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQItem from '../components/FAQItem';
import AnimatedGridBg from '../components/AnimatedGridBg';
import { stats } from '../data/team';
import { courses, featuredCourses } from '../data/courses';
import { faqs } from '../data/faqs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getFaIcon } from '../utils/icons';
import styles from './HomePage.module.css';

const WHY_US = [
  { icon: 'fa-solid fa-graduation-cap', title: 'British-Certified Master Trainers', desc: 'Learn from expert mentors certified by Oxford TEFL and Trinity College London, bringing global pedagogy standards straight to your screen.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Accredited Global Certifications', desc: 'Choose from over 100+ professional courses in Health Care & Quality, English Exam Preparation, Languages, Soft Skills, Finance, Information Technology, Human Resources, and Aviation designed to match global industry standards.' },
  { icon: 'fa-solid fa-user-gear', title: 'End-to-End Success Tracking', desc: 'We do not just teach; we monitor and mentor your progress directly until you achieve your target IELTS, OET, PTE score or certification.' },
  { icon: 'fa-solid fa-earth-asia', title: 'Seamless Study Abroad Pathways', desc: 'Get direct guidance, applications, and support for overseas education in top destinations like USA, UK, Canada, Australia, and Germany.' },
  { icon: 'fa-solid fa-desktop', title: 'Smart Digital Classrooms', desc: 'Experience interactive high-definition live sessions, flexible schedules, and comprehensive lifetime study resources from anywhere.' },
  { icon: 'fa-solid fa-award', title: 'Elite Student Success Rate', desc: 'Join thousands of successful professionals and students across 20+ countries who achieved their career goals with ProFRONTIER.' },
];

const OFFERS = [
  { icon: 'fa-solid fa-chalkboard-user', title: 'Learn From Certified Experts', desc: 'Our trainers are British-certified from Oxford TEFL and Trinity College London. They track student progress until the end result and deliver high-quality training.', link: '/courses', linkText: 'View Courses' },
  { icon: 'fa-solid fa-plane', title: 'We Offer Overseas Education', desc: 'Overseas education offers students exposure to different cultures, languages, and educational systems, broadening their perspectives and enhancing personal and professional development.', link: '/overseas', linkText: 'Explore Overseas', featured: true },
  { icon: 'fa-solid fa-trophy', title: '100+ Courses Available', desc: 'Professional courses in Health Care & Quality, English Exam Preparation, Languages, Soft Skills, Finance, Information Technology, Human Resources, and Aviation — carefully assessed for quality and educational soundness.', link: '/courses', linkText: 'Browse All' },
];

export default function HomePage() {
  const heroRef = useScrollReveal({ delay: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formMsg, setFormMsg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormMsg('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormMsg(''), 5000);
  };



  return (
    <div className={styles.page}>
      {/* ── HERO ──────────────────────────────────── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroBgImage} />
        <div className={styles.heroBgBlue} />
        <div className={styles.heroBgPurple} />
        <div className={`container ${styles.heroContainer}`}>
          <div ref={heroRef} className={`${styles.heroContent} reveal`}>
            <div className={styles.heroBadge}>
              <i className="fa-solid fa-rocket" style={{ marginRight: '6px', color: 'var(--blue)' }}></i>
              <span>International Online Academy</span>
              <span className={styles.heroBadgeDivider}>|</span>
              <span className={styles.heroBadgeHighlight}>2026 Cohorts Open</span>
            </div>
            <h1 className={styles.heroHeading}>
              <span>Educate.</span>
              <span>Empower.</span>
              <span className="gradient-text">Excel.</span>
            </h1>
            <p className={styles.heroDesc}>
              ProFRONTIER blends expert mentors with future-ready online classrooms — IELTS, OET, PTE, professional English and 100+ global certifications. Our trainers are British-certified from Oxford TEFL and Trinity College London.
            </p>
            <div className={styles.heroCTA}>
              <Link to="/contact" className="btn btn--gradient btn--lg">Get Started →</Link>
              <Link to="/courses" className="btn btn--ghost btn--lg">
                <span className={styles.playIcon}><i className="fa-solid fa-play"></i></span> Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────── */}
      <section className={`${styles.statsSection} section`}>
        <AnimatedGridBg />
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => <StatCounter key={s.id} stat={s} />)}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────── */}
      <section className="section" id="offer">
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">WHAT WE OFFER FOR GROWTH</span>
            <h2 className="section__title">A Better Learning Era <span className="gradient-text">Starts Here!</span></h2>
            <p className="section__desc">Professional courses in Health Care & Quality, English Exam Preparation, Languages, Soft Skills, Finance, Information Technology, Human Resources, and Aviation — 100+ options</p>
          </div>
          <div className={styles.offerGrid}>
            {OFFERS.map((o, i) => (
              <div key={o.title} className={`${styles.offerCard} ${o.featured ? styles.offerFeatured : ''} reveal reveal--delay-${i + 1} glow-card`}>
                <div className={styles.offerIcon}><i className={getFaIcon(o.icon)}></i></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <Link to={o.link} className={`btn btn--sm ${o.featured ? 'btn--gradient' : 'btn--outline'}`}>
                  {o.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ──────────────────────── */}
      <section className="section" id="courses" style={{ background: 'linear-gradient(180deg, transparent, rgba(8,15,32,0.8) 50%, transparent)' }}>
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">FEATURED LEARNING PROGRAMS</span>
            <h2 className="section__title">Our Most <span className="gradient-text">Popular Courses</span></h2>
            <p className="section__desc">Choose from 100+ professionally designed courses with proven career outcomes</p>
          </div>
          <div className={styles.coursesGrid}>
            {featuredCourses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
          </div>
          <div className={styles.coursesViewAll}>
            <Link to="/courses" className="btn btn--gradient btn--lg">View All 100+ Courses →</Link>
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ────────────────────────────── */}
      <section className={`${styles.instructor} section`} id="instructor">
        <AnimatedGridBg />
        <div className={styles.instructorGlow} />
        <div className="container">
          <div className={styles.instructorGrid}>
            <div className={styles.instructorVisual}>
              <div className={styles.instructorCard}>
                <div className={styles.instructorAvatar}>
                    <img src="/assets/team/MD.png" alt="Mr. Mohammed Haris" className={styles.instructorAvatarImg} />
                  </div>
                <div className={styles.instructorRing} />
                <div className={styles.instructorBadge}>
                  <i className="fa-solid fa-star" style={{ color: '#EAB308', marginRight: '6px' }}></i> 9.8/10 Rating
                </div>
                <div className={styles.instructorBadge2}>
                  <i className="fa-solid fa-landmark" style={{ marginRight: '6px' }}></i> British Certified
                </div>
              </div>
            </div>
            <div className={styles.instructorContent}>
              <span className="section__tag">MEET YOUR INSTRUCTOR</span>
              <h2 className="section__title">Mr. <span className="gradient-text">Mohammed Haris</span></h2>
              <p className={styles.instrRole}>Founder & Director — Creator of the Career Confidence Architecture</p>
              <div className={styles.instrBio}>
                <p>For 16 years, Haris has worked with one conviction: capable people get overlooked not because of their English, but because of a visibility gap — the distance between what they can do and what the room actually sees.</p>
                <p style={{ marginTop: '10px' }}>Through ProFRONTIER's signature method, the Career Confidence Architecture, he helps professionals across many countries especially the Gulf & South Asia close that gap — turning quietly competent people into clear, confident, credible communicators who get selected, not just shortlisted.</p>
                <p style={{ marginTop: '10px' }}>His work spans graduates walking into their first interview, managers fighting to be heard in meetings, and corporate teams being built to communicate with authority.</p>
              </div>
              <div className={styles.instrCreds}>
                {[
                  'Trinity CertTESOL — Trinity College London',
                  'Certified Train-the-Trainer (CPD · SHRM · HRCI)',
                  'Certified Corporate Trainer & Facilitator',
                  'Certified Soft skills trainer',
                  'AI Generalist Mastermind',
                  'LinkedIn Strategist',
                  'Global MBA - University of Western Australia',
                  'Trusted by 10,000+ Professionals, 20+ MNCs.',
                ].map((c) => (
                  <div key={c} className={styles.instrCred}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--teal)', marginRight: '6px' }}></i> {c}
                  </div>
                ))}
              </div>
              <div className={styles.instrStats}>
                {[
                  { n: '10,000+', l: 'Professionals' },
                  { n: '20+', l: 'MNCs' },
                  { n: '16+', l: 'Years Exp.' },
                ].map((s) => (
                  <div key={s.l} className={styles.instrStat}>
                    <strong>{s.n}</strong>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn--gradient">Meet The Full Team →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────── */}
      <section className="section" id="why">
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">OUR EDGE</span>
            <h2 className="section__title">Why is this the <span className="gradient-text">Best Choice?</span></h2>
            <p className="section__desc">Unlocking academic excellence, global opportunities, and professional success through verified coaching excellence</p>
          </div>
          <div className={styles.whyGrid}>
            {WHY_US.map((w, i) => (
              <div key={w.title} className={`${styles.whyCard} reveal reveal--delay-${(i % 3) + 1} glow-card`}>
                <div className={styles.whyIcon}>
                  <span><i className={getFaIcon(w.icon)}></i></span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────── */}
      <section className="section" id="testimonials" style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)' }}>
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">STUDENT SUCCESS STORIES</span>
            <h2 className="section__title">What Our <span className="gradient-text">Students Say</span></h2>
            <p className="section__desc">Real results from real learners across 20+ countries</p>
          </div>
          <div className={styles.guaranteeRow}>
            {[
              { n: '97%', l: 'Student satisfaction rate based on exit surveys' },
              { n: '15 days', l: 'Money-back guarantee if not completely satisfied' },
              { n: '90%', l: 'Of students report improved confidence in speaking' },
            ].map((g) => (
              <div key={g.n} className={styles.guaranteeStat}>
                <span className={styles.guaranteeNum}>{g.n}</span>
                <span className={styles.guaranteeLabel}>{g.l}</span>
              </div>
            ))}
          </div>
          <TestimonialSlider />
        </div>
      </section>



      {/* ── FAQ PREVIEW ───────────────────────────── */}
      <section className="section">
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">GOT QUESTIONS?</span>
            <h2 className="section__title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="section__desc">Everything you need to know about ProFRONTIER programs</p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.slice(0, 6).map((f, i) => <FAQItem key={f.id} faq={f} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/faqs" className="btn btn--outline btn--lg">View All FAQs →</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────── */}
      <section className={`${styles.ctaSection} section`} id="contact">
        <AnimatedGridBg />
        <div className={styles.ctaGlowBlue} />
        <div className={styles.ctaGlowPurple} />
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaContent}>
              <span className="section__tag">FREE DEMO AVAILABLE</span>
              <h2 className="section__title">Ready to <span className="gradient-text">Get Started?</span></h2>
              <p className={styles.ctaDesc}>
                Your first class is completely FREE. No commitment, no credit card needed. Talk to our experts and find the perfect course for your goals.
              </p>
              <div className={styles.ctaContactItems}>
                <a href="mailto:profrontieronlineacademy@gmail.com" className={styles.ctaContactItem}>
                  <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'var(--blue)' }}></i>
                  profrontieronlineacademy@gmail.com
                </a>
                <a href="tel:+96522094240" className={styles.ctaContactItem}>
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--blue)' }}></i>
                  +965-22094240
                </a>
                <div className={styles.ctaContactItem}>
                  <i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: 'var(--blue)' }}></i>
                  Kuwait | India (Future Office: UAE)
                </div>
              </div>
            </div>
            <form className={styles.ctaForm} onSubmit={handleFormSubmit}>
              <div className={styles.formRow}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input id="email" type="email" placeholder="Your Email" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="Your Phone" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message / Enquiry</label>
                <textarea id="message" placeholder="Which course are you interested in?" value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
              </div>
              {formMsg && (
                <div className={styles.formSuccess}>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }}></i>
                  {formMsg}
                </div>
              )}
              <button type="submit" className="btn btn--gradient btn--full btn--lg">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
