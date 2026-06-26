import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { team, stats } from '../data/team';
import StatCounter from '../components/StatCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { getFaIcon } from '../utils/icons';
import styles from './AboutPage.module.css';

const MISSION_VALUES = [
  { icon: 'fa-solid fa-bullseye', title: 'Our Mission', desc: 'To democratize world-class education by providing high-quality, affordable online courses to learners across 120+ countries. We believe every learner deserves access to transformational education regardless of their location.' },
  { icon: 'fa-solid fa-compass', title: 'Our Vision', desc: 'To become the world\'s most trusted online academy for language, professional, and certification training — empowering individuals to upgrade their skills and elevate their lives through quality education.' },
  { icon: 'fa-solid fa-gem', title: 'Our Values', desc: 'Excellence in every lesson. Integrity in every interaction. Innovation in every curriculum. Empathy for every learner\'s unique journey. Community built on mutual respect and support.' },
];

const TEAM_EXTRAS = {
  haris: {
    badgeIcon: 'fa-solid fa-user',
    statsIcons: ['fa-solid fa-graduation-cap', 'fa-solid fa-star', 'fa-solid fa-award'],
    accentColor: '#38bdf8',
    isPurple: false
  },
  shama: {
    badgeIcon: 'fa-solid fa-briefcase',
    statsIcons: ['fa-solid fa-calendar-days', 'fa-solid fa-building-columns', 'fa-solid fa-users'],
    accentColor: '#d946ef',
    isPurple: true,
    bio: "Dr. Shama brings extensive expertise in education management and operations, ensuring that ProFRONTIER maintains the highest standards of educational quality and student satisfaction across all programmes.",
    labels: ['YEARS IN EDUCATION', 'INSTITUTIONS LED', 'STUDENTS MENTORED']
  },
  danish: {
    badgeIcon: 'fa-solid fa-book-open',
    statsIcons: ['fa-solid fa-book-open', 'fa-solid fa-graduation-cap', 'fa-solid fa-award'],
    accentColor: '#38bdf8',
    isPurple: false,
    bio: "Mr. Danish oversees the academic direction of ProFRONTIER, designing and refining curricula to ensure every programme meets the highest international standards and drives impactful learning outcomes.",
    labels: ['COURSES DESIGNED', 'YEARS IN ACADEMIA', 'PASS RATE ACHIEVED']
  }
};

export default function AboutPage() {
  const ref = useScrollReveal({ delay: 0 });

  useEffect(() => {
    document.title = 'About Us — ProFRONTIER International Online Academy';
  }, []);

  return (
    <div className={styles.page}>
      {/* Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
          <span className="section__tag page-banner__tag">WHO WE ARE</span>
          <h1>About <span className="gradient-text">ProFRONTIER</span></h1>
          <p>We are experts in education — in quality education. Our combined expertise means we can cover all aspects of education, online and beyond.</p>
        </div>
      </div>

      {/* Story */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className={styles.storyGrid}>
            
            {/* Visual Column */}
            <div className={`${styles.storyVisual} reveal`} ref={ref}>
              {/* Glowing Globe and Pedestal Setup */}
              <div className={styles.orbitContainer}>
                <div className={styles.orbitRing1} />
                <div className={styles.orbitRing2} />
                <div className={styles.orbitRing3} />
              </div>
              
              <div className={styles.pedestalContainer}>
                <div className={styles.pedestalGlow} />
                <div className={styles.pedestalRing2} />
                <div className={styles.pedestalRing1} />
              </div>
              
              <div className={styles.globeGlow} />
              <div className={styles.globeOuter}>
                <div className={styles.globeGrid} />
              </div>
              
              <div className={styles.centerCap}>
                <img
                  src="/assets/graduation-cap-3d.png"
                  alt="Graduation Cap"
                  className={styles.centerCapImg}
                />
              </div>

              {/* Floating feature cards */}
              <div className={`${styles.floatCard} ${styles.fcGlobal}`}>
                <div className={styles.cardIconBlue}>
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardTitle}>Global Reach</span>
                  <span className={styles.cardSubtitle}>Students in 120+ countries</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.fcResults}`}>
                <div className={styles.cardIconBlue}>
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardTitle}>Proven Results</span>
                  <span className={styles.cardVal}>95%</span>
                  <span className={styles.cardSubtitle}>student success rate</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.fcMentors}`}>
                <div className={styles.cardIconPurple}>
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardTitle}>Expert Mentors</span>
                  <span className={styles.cardSubtitle}>Industry experts & certified instructors</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.fcCourses}`}>
                <div className={styles.cardIconBlue}>
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <div className={styles.cardText}>
                  <span className={styles.cardVal}>200+</span>
                  <span className={styles.cardSubtitle}>Premium Courses</span>
                </div>
              </div>
            </div>

            {/* Story Content Column */}
            <div className={styles.storyContent}>
              <div className={styles.storyBadge}>OUR STORY ➔</div>
              <h2 className={styles.storyHeading}>
                We are <span className={styles.accentTextBlue}>Pro</span><span className={styles.accentTextPink}>FRONTIER!</span>
              </h2>
              <div className={styles.divider} />
              
              <p>
                ProFRONTIER are experts in education — in quality education. Our combined expertise means that we can cover all aspects of education. Online education is our specialty. We therefore choose the institutions we work with carefully to ensure that you are always provided with the highest quality and most affordable online courses available worldwide.
              </p>
              
              <div className={styles.quoteCard}>
                <div className={styles.quoteIcon}><i className="fa-solid fa-quote-left"></i></div>
                <p>
                  ProFRONTIER - International Online Academy prides itself on being one of the best online academies in the world. We are a team of highly qualified and expert trainers in all the courses we provide who joined hands to initiate a top-notch online institution after realizing the need since the COVID outbreak and lockdown.
                </p>
              </div>
              
              <p>
                Since it started, we have been delivering outstanding results and have witnessed a remarkable change in people's lives. Professional courses from different Sectors like Finance, IT, Human Resource, Aviation, Languages, Soft Skills, Safety First are available — all carefully assessed for quality and educational soundness.
              </p>
              
              <div className={styles.storyButtons}>
                <Link to="/courses" className="btn btn--gradient btn--lg">Explore Our Courses ➔</Link>
                <Link to="/contact" className="btn btn--outline btn--lg">Contact Us ➔</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--sm" style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => <StatCounter key={s.id} stat={s} />)}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className={styles.mvSection}>
        <div className={styles.orbitGlowLeft} />
        <div className={styles.orbitGlowLeftInner} />
        <div className={`${styles.dotGrid} ${styles.dotGridLeft}`} />
        <div className={`${styles.dotGrid} ${styles.dotGridRight}`} />
        <div className={styles.gridFloor} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.mvHeader}>
            <span className={styles.foundationBadge}>OUR FOUNDATION</span>
            <h2 className={styles.mvHeading}>
              Mission, Vision <span className={styles.mvHeadingGradient}>&amp; Values</span>
            </h2>
            
            <div className={styles.sparkleContainer}>
              <div className={styles.sparkleLine} />
              <div className={styles.sparkleStar}>✦</div>
              <div className={styles.sparkleLine} />
            </div>

            <p className={styles.mvSubtitle}>
              We are driven by a purpose to transform education through innovation, accessibility, and excellence. Our mission, vision, and values guide everything we do.
            </p>
          </div>

          <div className={styles.mvGrid}>
            {MISSION_VALUES.map((m, i) => {
              const isPurple = i === 2;
              const cardClass = isPurple ? styles.cardPurple : styles.cardCyan;
              const strokeColor = isPurple ? '#d946ef' : '#00A3FF';
              
              return (
                <div key={m.title} className={styles.mvCardWrapper}>
                  <div className={styles.mvIconWrapper}>
                    <div className={styles.mvIconCircle}>
                      <i className={m.icon}></i>
                    </div>
                  </div>
                  <div className={`${styles.mvCard} ${cardClass} reveal reveal--delay-${i + 1} glow-card`}>
                    <h3>{m.title}</h3>
                    <div className={styles.cardDivider} />
                    <p>{m.desc}</p>
                    
                    {/* Bottom Right Wave and Arrow */}
                    <div className={styles.cardCornerWave}>
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 40 C75 40, 40 75, 40 100" stroke={strokeColor} strokeWidth="2.5" fill="none" opacity="0.85" />
                      </svg>
                    </div>
                    <div className={styles.cardArrow}>➔</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.teamBadge}>MEET THE TEAM</span>
            <h2 className={styles.teamHeading}>
              Expert <span className={styles.teamHeadingGradient}>Leadership</span>
            </h2>
            <p className={styles.teamSubtitle}>
              A team of world-class educators, trainers and industry professionals dedicated to your success
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, i) => {
              const extras = TEAM_EXTRAS[member.id] || {};
              const isPurple = extras.isPurple || false;
              const cardClass = isPurple ? styles.cardPurple : styles.cardCyan;
              const checkIconColor = isPurple ? '#d946ef' : '#38bdf8';
              const statsIcons = extras.statsIcons || [];
              const labels = extras.labels || [];
              const bioText = extras.bio || member.bio;
              
              return (
                <div key={member.id} className={`${styles.teamCard} ${cardClass} reveal reveal--delay-${i + 1} glow-card`}>
                  
                  {/* Avatar wrapper with glow and overlapping badge */}
                  <div className={styles.teamAvatarWrapper}>
                    <div className={styles.teamAvatar}>
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className={styles.teamAvatarImg}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span className={styles.teamAvatarInitials} style={member.image ? { display: 'none' } : {}}>
                        {member.avatar}
                      </span>
                    </div>
                    <div className={styles.teamAvatarRing} />
                    
                    {/* Small Corner Badge on Avatar */}
                    {extras.badgeIcon && (
                      <div className={styles.teamAvatarBadge}>
                        <i className={extras.badgeIcon}></i>
                      </div>
                    )}
                  </div>
                  
                  {/* Member info details */}
                  <div className={styles.teamInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <p className={styles.teamSpecialty}>{member.specialty}</p>
                    
                    <p className={styles.teamBio}>{bioText}</p>
                    
                    {/* Credentials checklist */}
                    <div className={styles.teamCreds}>
                      {member.credentials.map((c) => (
                        <div key={c} className={styles.teamCred}>
                          <i className="fa-solid fa-circle-check" style={{ color: checkIconColor }}></i>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Premium horizontal stats block */}
                    <div className={styles.teamStats}>
                      {member.stats.map((s, idx) => (
                        <div key={s.label} className={styles.teamStatCol}>
                          <div className={styles.teamStatIcon}>
                            <i className={statsIcons[idx] || 'fa-solid fa-star'}></i>
                          </div>
                          <strong>{s.value}</strong>
                          <span>{labels[idx] || s.label}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Partner CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.partnerGrid}>
            <div className={`${styles.partnerCard} reveal reveal--delay-1 glow-card`}>
              <div className={styles.partnerIcon}><i className="fa-solid fa-book-open"></i></div>
              <h3>Popular Courses</h3>
              <p>Professional courses from different Sectors like Finance, IT, Human Resource, Aviation, Languages, Soft Skills, Safety First are available.</p>
              <Link to="/courses" className="btn btn--gradient">Browse Courses →</Link>
            </div>
            <div className={`${styles.partnerCard} reveal reveal--delay-2 glow-card`}>
              <div className={styles.partnerIcon}><i className="fa-solid fa-plane"></i></div>
              <h3>Overseas Education</h3>
              <p>Studying abroad for diverse cultural exposure and academic growth — we guide students to top universities across 8+ countries.</p>
              <Link to="/overseas" className="btn btn--outline">Explore Overseas →</Link>
            </div>
            <div className={`${styles.partnerCard} reveal reveal--delay-3 glow-card`}>
              <div className={styles.partnerIcon}><i className="fa-solid fa-handshake"></i></div>
              <h3>Become a Partner</h3>
              <p>ProFRONTIER are experts in education — in quality education. Our combined expertise means we can cover all aspects of education.</p>
              <Link to="/contact" className="btn btn--outline">Get in Touch →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
