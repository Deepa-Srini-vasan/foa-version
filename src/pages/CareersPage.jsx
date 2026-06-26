import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CareersPage.module.css';

const OPENINGS = [
  {
    id: 1,
    title: 'TESOL / TEFL Teacher for Young Learners',
    category: 'Teaching',
    location: 'Remote',
    type: 'Full Time',
    applicants: '120+',
    featured: true,
    themeColor: '#00A3FF',
    glowColor: 'rgba(0, 163, 255, 0.15)',
    borderGlow: 'rgba(0, 163, 255, 0.25)',
    skills: ['TESOL/TFEL', 'Young Learners', 'English Teaching'],
    desc: 'Help children and young learners build a strong foundation in English through interactive, fun, and engaging online sessions.',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="35" r="15" />
        <path d="M20,80 C20,60 30,55 50,55 C70,55 80,60 80,80" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'TESOL / TEFL Teacher for Adult Learners',
    category: 'Teaching',
    location: 'Remote',
    type: 'Full Time',
    applicants: '98+',
    featured: false,
    themeColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    borderGlow: 'rgba(139, 92, 246, 0.25)',
    skills: ['TESOL/TFEL', 'Adult ESL', 'Communication'],
    desc: 'Train adult learners in spoken English, corporate communication, standard pronunciation, and conversational grammar.',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25,45 L50,25 L75,45 L50,65 Z" />
        <path d="M25,45 L25,70 C25,75 35,80 50,80 C65,80 75,75 75,70 L75,45" />
        <path d="M75,50 L85,50 L85,75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'IELTS / OET / PTE Trainer',
    category: 'Exam Prep',
    location: 'Remote',
    type: 'Part Time',
    applicants: '76+',
    featured: false,
    themeColor: '#00D4AA',
    glowColor: 'rgba(0, 212, 170, 0.15)',
    borderGlow: 'rgba(0, 212, 170, 0.25)',
    skills: ['IELTS', 'OET', 'PTE', 'Test Preparation'],
    desc: 'Prepare candidates for high-stakes English examinations. Provide targeted mock tests, strategies, speaking practice, and feedback.',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25,45 L50,25 L75,45 L50,65 Z" />
        <path d="M25,45 L25,70 C25,75 35,80 50,80 C65,80 75,75 75,70 L75,45" />
        <path d="M75,50 L85,50 L85,75" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Spoken Arabic Teacher',
    category: 'Teaching',
    location: 'Remote',
    type: 'Part Time',
    applicants: '54+',
    featured: false,
    themeColor: '#EC4899',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    borderGlow: 'rgba(236, 72, 153, 0.25)',
    skills: ['Arabic', 'Spoken Language', 'Conversational'],
    desc: 'Teach conversational spoken Arabic to students looking to travel, study, or work in Middle Eastern countries.',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,35 C20,25 35,20 50,20 C65,20 80,25 80,35 C80,45 65,50 50,50 C45,50 40,49 35,47 L20,53 L24,43 C21,41 20,38 20,35 Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Social Media Executive',
    category: 'Marketing',
    location: 'Remote',
    type: 'Part Time',
    applicants: '32+',
    featured: false,
    themeColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    borderGlow: 'rgba(245, 158, 11, 0.25)',
    skills: ['Social Media', 'Marketing', 'Content Creation'],
    desc: 'Manage and grow our social media presence. Create engaging content, interact with followers, and run campaigns.',
    iconSvg: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,20 C20,15 30,10 50,10 C70,10 80,15 80,20 C80,25 70,30 50,30 C30,30 20,25 20,20 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M25,45 C25,35 35,30 50,30 C65,30 75,35 75,45 L75,65 C75,75 65,80 50,80 C35,80 25,75 25,65 Z" />
        <path d="M60,60 L65,65" />
      </svg>
    ),
  }
];

export default function CareersPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('All Locations');
  const [type, setType] = useState('All Types');
  const [bookmarked, setBookmarked] = useState({});

  useEffect(() => {
    document.title = 'Careers — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter logic
  const filteredOpenings = OPENINGS.filter((op) => {
    const matchesSearch = op.title.toLowerCase().includes(search.toLowerCase()) ||
      op.desc.toLowerCase().includes(search.toLowerCase()) ||
      op.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === 'All Categories' || op.category === category;
    const matchesLocation = location === 'All Locations' || op.location === location;
    const matchesType = type === 'All Types' || op.type === type;

    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div className={styles.page}>
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainLayout}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              <span className={styles.hiringBadge}>WE'RE HIRING</span>
              <h1 className={styles.mainHeading}>
                Join Our Global <span className="gradient-text">Educator Network</span>
              </h1>
              <p className={styles.mainDesc}>
                Empower learners, inspire minds, and build a better future through education. Become a part of our mission to make quality learning accessible worldwide.
              </p>

              <ul className={styles.benefitsList}>
                <li>
                  <span className={styles.checkIcon}><i className="fa-solid fa-circle-check"></i></span>
                  Work from anywhere in the world
                </li>
                <li>
                  <span className={styles.checkIcon}><i className="fa-solid fa-circle-check"></i></span>
                  Flexible schedules & growth opportunities
                </li>
                <li>
                  <span className={styles.checkIcon}><i className="fa-solid fa-circle-check"></i></span>
                  Impact thousands of students globally
                </li>
              </ul>

              <a href="#open-positions" className="btn btn--gradient" style={{ alignSelf: 'flex-start', padding: '14px 32px' }}>
                Explore Open Positions <span>→</span>
              </a>

              {/* Animated Globe Illustration */}
              <div className={styles.globeGraphicContainer}>
                <div className={styles.globeWrapper}>
                  {/* Central globe icon */}
                  <div className={styles.globeIconCircle}>
                    <i className="fa-solid fa-earth-americas"></i>
                  </div>
                  <div className={styles.globeOutline} />
                  <div className={styles.globePulse} />

                  {/* Floating profiles */}
                  <div className={`${styles.profileBubble} ${styles.bubbleTop}`}>
                    <img src="/assets/testimonials/sarah.png" alt="Educator" />
                  </div>
                  <div className={`${styles.profileBubble} ${styles.bubbleRight}`}>
                    <img src="/assets/testimonials/david.png" alt="Educator" />
                  </div>
                  <div className={`${styles.profileBubble} ${styles.bubbleBottom}`}>
                    <img src="/assets/testimo/testimo-01.jpeg" alt="Educator" />
                  </div>
                  <div className={`${styles.profileBubble} ${styles.bubbleLeft}`}>
                    <img src="/assets/testimonials/mohammed.png" alt="Educator" />
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={`${styles.statIcon} ${styles.iconBlue}`}>
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>25+</h3>
                    <p>Open Positions</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={`${styles.statIcon} ${styles.iconTeal}`}>
                    <i className="fa-solid fa-earth-americas"></i>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>15+</h3>
                    <p>Countries</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={`${styles.statIcon} ${styles.iconPurple}`}>
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>5000+</h3>
                    <p>Students Impacted</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={`${styles.statIcon} ${styles.iconPink}`}>
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <div className={styles.statInfo}>
                    <h3>150+</h3>
                    <p>Expert Educators</p>
                  </div>
                </div>
              </div>

              {/* Hiring Process */}
              <div className={styles.hiringProcessSection}>
                <h2 className={styles.processHeading}>Our Hiring Process</h2>
                <div className={styles.processTimeline}>
                  {[
                    { step: 1, title: 'Apply Online', desc: 'Submit your application and documents.', icon: 'fa-solid fa-file-lines', color: '#00A3FF' },
                    { step: 2, title: 'Screening', desc: 'Our team reviews your application.', icon: 'fa-solid fa-magnifying-glass', color: '#00D4AA' },
                    { step: 3, title: 'Demo Session', desc: 'Showcase your teaching skills in a demo class.', icon: 'fa-solid fa-video', color: '#8B5CF6' },
                    { step: 4, title: 'Interview', desc: 'Connect with our team for an interview.', icon: 'fa-solid fa-user-check', color: '#EC4899' },
                    { step: 5, title: 'Offer Letter', desc: 'Receive your offer and welcome aboard!', icon: 'fa-solid fa-envelope', color: '#00A3FF' },
                  ].map((item) => (
                    <div key={item.step} className={styles.timelineItem}>
                      <div className={styles.stepCircleWrapper}>
                        <div className={styles.stepIconCircle} style={{ color: item.color, borderColor: item.color }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className={styles.stepNumber} style={{ backgroundColor: item.color }}>{item.step}</span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn} id="open-positions">
              <div className={styles.openPositionsHeader}>
                <h2>Open Positions</h2>
                <span className={styles.openCountBadge}>25+</span>
              </div>

              {/* Search Box */}
              <div className={styles.searchBox}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className={styles.filtersWrapper}>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="All Categories">All Categories</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Exam Prep">Exam Prep</option>
                </select>

                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  <option value="All Locations">All Locations</option>
                  <option value="Remote">Remote</option>
                </select>

                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="All Types">All Types</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>

              {/* Jobs List */}
              <div className={styles.jobsList}>
                {filteredOpenings.map((op) => (
                  <div
                    key={op.id}
                    className={`${styles.jobCard} glow-card`}
                    style={{
                      '--accent-glow': op.glowColor,
                      '--border-glow': op.borderGlow,
                      '--accent-color': op.themeColor,
                    }}
                  >
                    <div
                      className={styles.jobBadge}
                      style={{
                        borderColor: op.themeColor,
                        color: op.themeColor,
                        boxShadow: `0 0 20px ${op.glowColor}`,
                      }}
                    >
                      {op.iconSvg}
                    </div>

                    <div className={styles.jobContent}>
                      <div className={styles.jobHeader}>
                        <h3>{op.title}</h3>
                        <div className={styles.headerActions}>
                          {op.featured && <span className={styles.featuredBadge}>FEATURED</span>}
                          <button
                            className={`${styles.bookmarkBtn} ${bookmarked[op.id] ? styles.bookmarked : ''}`}
                            onClick={() => toggleBookmark(op.id)}
                            aria-label="Save job"
                          >
                            <i className={bookmarked[op.id] ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}></i>
                          </button>
                        </div>
                      </div>

                      <div className={styles.jobMeta}>
                        <span><i className="fa-solid fa-wifi" style={{ marginRight: '6px' }}></i>{op.location}</span>
                        <span><i className="fa-regular fa-clock" style={{ marginRight: '6px' }}></i>{op.type}</span>
                      </div>

                      <p className={styles.jobDesc}>{op.desc}</p>

                      <div className={styles.jobFooter}>
                        <div className={styles.jobTags}>
                          {op.skills.map((skill) => (
                            <span key={skill} className={styles.tag}>{skill}</span>
                          ))}
                        </div>
                        <div className={styles.jobApplyCol}>
                          <span className={styles.applicantCount}>{op.applicants} Applicants</span>
                          <a
                            href={`mailto:profrontieronlineacademy@gmail.com?subject=Application for ${op.title}`}
                            className="btn btn--gradient btn--sm"
                            style={{ padding: '8px 18px', fontSize: 'var(--font-size-xs)' }}
                          >
                            Apply Now <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredOpenings.length === 0 && (
                  <div className={styles.noResults}>
                    <p>No open positions match your search criteria.</p>
                  </div>
                )}

                {/* Don't see the right fit? Card */}
                <div className={styles.customCvCard}>
                  <div className={styles.customCvIcon}>
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                  <div className={styles.customCvInfo}>
                    <h3>Don't see the right fit?</h3>
                    <p>Send us your CV and we'll reach out when a suitable role opens.</p>
                  </div>
                  <a href="mailto:profrontieronlineacademy@gmail.com?subject=General Application / CV Submission" className="btn btn--outline btn--sm" style={{ padding: '10px 20px', fontSize: 'var(--font-size-xs)' }}>
                    Send Your CV <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
