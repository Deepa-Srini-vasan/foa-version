import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import StatCounter from '../components/StatCounter';
import CourseCard from '../components/CourseCard';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQItem from '../components/FAQItem';
import AnimatedGridBg from '../components/AnimatedGridBg';
import { stats } from '../data/team';
import { courses } from '../data/courses';
import { faqs } from '../data/faqs';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getFaIcon } from '../utils/icons';
import styles from './HomePage.module.css';

const featuredCourses = courses.slice(0, 6);

const WHY_US = [
  { icon: 'fa-solid fa-comments', title: 'Understand How Your Mouth Shapes Sounds', desc: 'Discover how the way your mouth moves affects your pronunciation, giving you the tools to make meaningful and lasting improvements.' },
  { icon: 'fa-solid fa-dumbbell', title: 'Develop Muscle Memory for Speech', desc: 'Train your speech muscles to produce new sounds effortlessly, so speaking feels natural and comfortable.' },
  { icon: 'fa-solid fa-music', title: 'Learn to Analyze and Perfect Speech', desc: 'Explore the sounds and patterns of English through phonetics, gaining the skills to fine-tune your pronunciation with precision.' },
  { icon: 'fa-solid fa-bullseye', title: 'Lessons Designed Just for You', desc: 'Every lesson is tailored to your unique language background, focusing on the areas that will make the biggest difference in how you speak.' },
  { icon: 'fa-solid fa-volume-high', title: 'Find the Rhythm of English', desc: 'Discover the melody and flow of natural spoken English, helping you sound clear, authentic, and confident.' },
  { icon: 'fa-solid fa-rocket', title: 'Speak with Clarity and Confidence', desc: 'Transform how you communicate, expressing yourself naturally and confidently in any situation, from interviews to boardroom presentations.' },
];

const OFFERS = [
  { icon: 'fa-solid fa-chalkboard-user', title: 'Learn From Certified Experts', desc: 'Our trainers are British-certified from Oxford TEFL and Trinity College London. They track student progress until the end result and deliver high-quality training.', link: '/courses', linkText: 'View Courses' },
  { icon: 'fa-solid fa-plane', title: 'We Offer Overseas Education', desc: 'Overseas education offers students exposure to different cultures, languages, and educational systems, broadening their perspectives and enhancing personal and professional development.', link: '/overseas', linkText: 'Explore Overseas', featured: true },
  { icon: 'fa-solid fa-trophy', title: '100+ Courses Available', desc: 'Professional courses from Finance, IT, Human Resource, Aviation, Languages, Soft Skills, Safety First — carefully assessed for quality and educational soundness.', link: '/courses', linkText: 'Browse All' },
];

export default function HomePage() {
  const heroRef = useScrollReveal({ delay: 0 });
  const [billingAnnual, setBillingAnnual] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formMsg, setFormMsg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormMsg('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setFormMsg(''), 5000);
  };

  const pricingPlans = [
    {
      name: 'Basic', icon: 'fa-solid fa-seedling', desc: 'Perfect for individual exam prep',
      monthly: 29, annual: 20,
      features: [
        { ok: true, text: '1 Course Access' }, { ok: true, text: 'Recorded Sessions' },
        { ok: true, text: 'Free Study Materials' }, { ok: true, text: 'Free Demo Class' },
        { ok: true, text: 'Community Forum' }, { ok: false, text: 'Live Classes' },
        { ok: false, text: 'Mentor Sessions' }, { ok: false, text: 'Overseas Guidance' },
      ],
    },
    {
      name: 'Pro', icon: 'fa-solid fa-bolt', desc: 'Ideal for serious learners', popular: true,
      monthly: 79, annual: 55,
      features: [
        { ok: true, text: '3 Course Access' }, { ok: true, text: 'Recorded + Live Sessions' },
        { ok: true, text: 'Free Study Materials' }, { ok: true, text: 'Free Demo Class' },
        { ok: true, text: 'Weekly Live Classes' }, { ok: true, text: '2 Mentor Sessions/mo' },
        { ok: true, text: 'Discount Vouchers' }, { ok: false, text: 'Overseas Guidance' },
      ],
    },
    {
      name: 'Premium', icon: 'fa-solid fa-crown', desc: 'Complete transformation package',
      monthly: 149, annual: 104,
      features: [
        { ok: true, text: 'Unlimited Course Access' }, { ok: true, text: 'All Sessions + Recordings' },
        { ok: true, text: 'Free Study Materials' }, { ok: true, text: 'Daily Live Classes' },
        { ok: true, text: 'Unlimited Mentorship' }, { ok: true, text: 'Scholarships Available' },
        { ok: true, text: 'Overseas Guidance' }, { ok: true, text: '15-Day Money Back' },
      ],
    },
  ];

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
            <p className="section__desc">Professional courses from Finance, IT, HR, Aviation, Languages, Soft Skills & Safety — 100+ options</p>
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
            <p className="section__desc">Every lesson is thoughtfully designed with your unique language background in mind</p>
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
            <p className="section__desc">Real results from real learners across 120+ countries</p>
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

      {/* ── PRICING ───────────────────────────────── */}
      <section className="section" id="pricing">
        <AnimatedGridBg />
        <div className="container">
          <div className="section__header">
            <span className="section__tag">INVEST IN YOURSELF</span>
            <h2 className="section__title">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
            <p className="section__desc">Choose a plan that fits your goals. Free demo for every first class!</p>
          </div>
          <div className={styles.pricingToggle}>
            <span className={!billingAnnual ? styles.toggleActive : ''}>Monthly</span>
            <button
              className={styles.toggleSwitch}
              onClick={() => setBillingAnnual((a) => !a)}
              aria-label="Toggle billing"
              role="switch"
              aria-checked={billingAnnual}
            >
              <span className={`${styles.toggleThumb} ${billingAnnual ? styles.toggleThumbOn : ''}`} />
            </button>
            <span className={billingAnnual ? styles.toggleActive : ''}>
              Annual <span className={styles.saveBadge}>Save 30%</span>
            </span>
          </div>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((p, i) => (
              <div key={p.name} className={`${styles.pricingCard} ${p.popular ? styles.pricingCardPopular : ''} reveal reveal--delay-${i + 1} glow-card`}>
                {p.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.pricingHeader}>
                  <span className={styles.pricingIcon}><i className={getFaIcon(p.icon)}></i></span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className={styles.pricingPrice}>
                  <span className={styles.priceCurr}>$</span>
                  <span className={styles.priceAmt}>{billingAnnual ? p.annual : p.monthly}</span>
                  <span className={styles.pricePer}>/mo</span>
                </div>
                <ul className={styles.pricingFeatures}>
                  {p.features.map((f) => (
                    <li key={f.text} className={f.ok ? styles.featureYes : styles.featureNo}>
                      <span>
                        {f.ok ? (
                          <i className="fa-solid fa-check" style={{ color: 'var(--teal)' }}></i>
                        ) : (
                          <i className="fa-solid fa-xmark" style={{ color: '#EF4444' }}></i>
                        )}
                      </span>{' '}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn btn--full ${p.popular ? 'btn--gradient' : 'btn--outline'}`}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
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
                <a href="tel:+96555377150" className={styles.ctaContactItem}>
                  <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--blue)' }}></i>
                  +965-55377150
                </a>
                <div className={styles.ctaContactItem}>
                  <i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: 'var(--blue)' }}></i>
                  Middle East, Kuwait | India
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
