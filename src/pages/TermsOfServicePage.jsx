import styles from './LegalPage.module.css';

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <span className="section__tag">Legal</span>
          <h1 className={styles.heroTitle}>Terms of <span className="gradient-text">Service</span></h1>
          <p className={styles.heroSub}>Last updated: 9 June 2026</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>

          <div className={styles.intro}>
            <p>
              Welcome to ProFRONTIER International Online Academy. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using our platform.
            </p>
            <p>
              If you do not agree to these Terms, you may not access or use our services.
            </p>
          </div>

          <Section number="1" title="Acceptance of Terms">
            <p>
              By creating an account, enrolling in a course, or using any part of our platform, you confirm that you are at least 16 years of age, have read and understood these Terms, and agree to be legally bound by them.
            </p>
          </Section>

          <Section number="2" title="Our Services">
            <p>ProFRONTIER International Online Academy provides:</p>
            <ul>
              <li>Online English language courses (IELTS, OET, PTE, Business English, British Accent, etc.)</li>
              <li>Professional certification preparation (CMA, CPA, ACCA, HRCI, SHRM, NEBOSH, etc.)</li>
              <li>Language courses (French, German, Chinese, Japanese, Turkish)</li>
              <li>Soft skills and aviation training programmes</li>
              <li>IT and digital services</li>
              <li>Overseas education consulting</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
            </p>
          </Section>

          <Section number="3" title="User Accounts">
            <p>To access certain features, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your password and account</li>
              <li>Notify us immediately of any unauthorised use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not share your account credentials with third parties</li>
            </ul>
            <p>We reserve the right to terminate accounts that violate these Terms or that have been inactive for an extended period.</p>
          </Section>

          <Section number="4" title="Enrolment & Payment">
            <ul>
              <li>Course enrolment is subject to availability and our acceptance of your registration.</li>
              <li>All prices are listed in the applicable currency and are inclusive of applicable taxes unless otherwise stated.</li>
              <li>Payments are processed through secure third-party gateways. By completing payment, you authorise the charge to your selected payment method.</li>
              <li>We reserve the right to modify pricing at any time. Price changes will not affect existing confirmed enrolments.</li>
            </ul>
          </Section>

          <Section number="5" title="Refund Policy">
            <ul>
              <li>Refund requests must be submitted within 7 days of enrolment, provided you have not accessed more than 20% of the course content.</li>
              <li>No refunds are available after the 7-day window or if significant course content has been accessed.</li>
              <li>Approved refunds will be processed within 10–14 business days to the original payment method.</li>
              <li>Promotional or discounted enrolments may not be eligible for refunds — this will be stated at the time of purchase.</li>
            </ul>
          </Section>

          <Section number="6" title="Intellectual Property">
            <p>
              All content on our platform — including course materials, videos, audio recordings, written content, graphics, software, and logos — is the intellectual property of ProFRONTIER International Online Academy or our licensed partners and is protected by copyright, trademark, and other applicable laws.
            </p>
            <p>You may not:</p>
            <ul>
              <li>Copy, reproduce, distribute, or publicly display any course content without written permission</li>
              <li>Use our content for commercial purposes</li>
              <li>Reverse-engineer or attempt to extract source code from our platform</li>
              <li>Remove or alter any copyright or proprietary notices</li>
            </ul>
            <p>Upon enrolment, you receive a limited, personal, non-transferable licence to access course materials for your own learning purposes only.</p>
          </Section>

          <Section number="7" title="Prohibited Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Use the platform for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to any part of the platform or its systems</li>
              <li>Transmit harmful, offensive, or misleading content</li>
              <li>Harass, abuse, or threaten other users or staff</li>
              <li>Impersonate any person or entity</li>
              <li>Share account credentials or course access with others</li>
              <li>Record, screenshot, or redistribute any live session without prior written consent</li>
              <li>Use automated means to scrape or collect data from the platform</li>
            </ul>
          </Section>

          <Section number="8" title="Certificates & Credentials">
            <p>
              Certificates of completion are awarded based on satisfactory completion of course requirements as defined for each programme. ProFRONTIER certificates recognise completion of our training. For internationally recognised third-party certifications (CMA, ACCA, NEBOSH, etc.), you must independently sit and pass official examinations administered by the respective certification bodies.
            </p>
          </Section>

          <Section number="9" title="Disclaimer of Warranties">
            <p>
              Our services are provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not guarantee that our platform will be uninterrupted, error-free, or free of viruses. We do not warrant specific learning outcomes or exam results.
            </p>
          </Section>

          <Section number="10" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, ProFRONTIER International Online Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our services. Our total liability shall not exceed the amount you paid for the specific course giving rise to the claim.
            </p>
          </Section>

          <Section number="11" title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Kuwait. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kuwait.
            </p>
          </Section>

          <Section number="12" title="Changes to Terms">
            <p>
              We may revise these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page with a new "Last updated" date. Your continued use of our services after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section number="13" title="Contact Us">
            <p>For questions about these Terms of Service, please contact:</p>
            <div className={styles.contactBlock}>
              <p><strong>ProFRONTIER International Online Academy</strong></p>
              <p>📍 Middle East, Kuwait | India</p>
              <p>📧 <a href="mailto:info@ProFRONTIERonlinetraining.com">info@ProFRONTIERonlinetraining.com</a></p>
              <p>📧 <a href="mailto:profrontieronlineacademy@gmail.com">profrontieronlineacademy@gmail.com</a></p>
              <p>📞 +965-55377150</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ number, title, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>{number}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}
