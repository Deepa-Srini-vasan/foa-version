import styles from './LegalPage.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <span className="section__tag">Legal</span>
          <h1 className={styles.heroTitle}>Privacy <span className="gradient-text">Policy</span></h1>
          <p className={styles.heroSub}>Last updated: 9 June 2026</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>

          <div className={styles.intro}>
            <p>
              ProFRONTIER International Online Academy ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enrol in our courses.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </div>

          <Section number="1" title="Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, country of residence.</li>
              <li><strong>Account Information:</strong> Username, password, and profile preferences.</li>
              <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment gateways — we do not store full card numbers).</li>
              <li><strong>Educational Data:</strong> Course enrolment history, progress, quiz scores, and certificates earned.</li>
              <li><strong>Communications:</strong> Messages you send us via contact forms, email, or support channels.</li>
            </ul>
            <p>We also collect certain information automatically when you visit our site:</p>
            <ul>
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URLs and search terms</li>
              <li>Device identifiers and cookie data</li>
            </ul>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our educational platform</li>
              <li>Process enrolments and payments</li>
              <li>Send you course updates, receipts, and support messages</li>
              <li>Personalise your learning experience</li>
              <li>Send promotional communications (only with your consent)</li>
              <li>Analyse usage trends to improve our services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unlawful activity</li>
            </ul>
          </Section>

          <Section number="3" title="Sharing Your Information">
            <p>We do not sell, trade, or rent your personal information. We may share your data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website, conducting our business, or serving users — subject to confidentiality agreements.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>Certification Bodies:</strong> Where required to issue internationally recognised certifications.</li>
            </ul>
          </Section>

          <Section number="4" title="Cookies & Tracking Technologies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience. These include session cookies (necessary for platform function), preference cookies (to remember your settings), and analytics cookies (to understand how users interact with our site).
            </p>
            <p>
              You can manage or disable cookies through your browser settings. For full details, please read our <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </Section>

          <Section number="5" title="Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Account information is typically retained for the duration of your account plus 3 years thereafter.
            </p>
          </Section>

          <Section number="6" title="Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data ("right to be forgotten")</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:info@ProFRONTIERonlinetraining.com">info@ProFRONTIERonlinetraining.com</a>.</p>
          </Section>

          <Section number="7" title="Data Security">
            <p>
              We implement industry-standard security measures including SSL encryption, secure data storage, and access controls to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number="8" title="Children's Privacy">
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
            </p>
          </Section>

          <Section number="9" title="Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </Section>

          <Section number="10" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section number="11" title="Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
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
