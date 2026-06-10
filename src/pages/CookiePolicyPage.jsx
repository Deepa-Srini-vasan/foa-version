import styles from './LegalPage.module.css';

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <span className="section__tag">Legal</span>
          <h1 className={styles.heroTitle}>Cookie <span className="gradient-text">Policy</span></h1>
          <p className={styles.heroSub}>Last updated: 9 June 2026</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>

          <div className={styles.intro}>
            <p>
              This Cookie Policy explains how ProFRONTIER International Online Academy ("we", "our", or "us") uses cookies and similar tracking technologies on our website. By continuing to use our site, you agree to our use of cookies as described in this policy.
            </p>
          </div>

          <Section number="1" title="What Are Cookies?">
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide analytical information to website owners.
            </p>
            <p>
              Cookies do not contain personally identifiable information on their own, but they can be linked to personal data we store about you in other ways.
            </p>
          </Section>

          <Section number="2" title="Types of Cookies We Use">
            <div className={styles.cookieTable}>
              <div className={styles.cookieRow + ' ' + styles.cookieRowHeader}>
                <div>Cookie Type</div>
                <div>Purpose</div>
                <div>Duration</div>
              </div>
              <div className={styles.cookieRow}>
                <div><strong>Essential Cookies</strong></div>
                <div>Required for the website to function correctly. These enable core features like login sessions, enrolment flows, and security. Cannot be disabled.</div>
                <div>Session / 1 year</div>
              </div>
              <div className={styles.cookieRow}>
                <div><strong>Preference Cookies</strong></div>
                <div>Remember your settings and preferences such as your chosen language, theme (dark/light mode), and display options.</div>
                <div>1 year</div>
              </div>
              <div className={styles.cookieRow}>
                <div><strong>Analytics Cookies</strong></div>
                <div>Help us understand how visitors interact with our website by collecting anonymised data on pages visited, time spent, and navigation paths. We use Google Analytics for this purpose.</div>
                <div>2 years</div>
              </div>
              <div className={styles.cookieRow}>
                <div><strong>Marketing Cookies</strong></div>
                <div>Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. Set by third-party advertising partners.</div>
                <div>90 days</div>
              </div>
              <div className={styles.cookieRow}>
                <div><strong>Performance Cookies</strong></div>
                <div>Monitor the performance of our website and identify any technical issues to improve site speed and reliability.</div>
                <div>Session / 30 days</div>
              </div>
            </div>
          </Section>

          <Section number="3" title="Third-Party Cookies">
            <p>Some cookies on our site are set by third-party services we use. These include:</p>
            <ul>
              <li><strong>Google Analytics</strong> — Anonymised usage analytics to help us improve our platform.</li>
              <li><strong>Google Fonts</strong> — Fonts used across the site may load from Google servers.</li>
              <li><strong>YouTube</strong> — Embedded course preview videos may set cookies when you interact with them.</li>
              <li><strong>Payment Processors</strong> — Our secure payment partners (e.g., Stripe) may set cookies during the checkout process.</li>
              <li><strong>Social Media Platforms</strong> — Sharing buttons for Facebook, Instagram, and LinkedIn may place cookies on your device.</li>
            </ul>
            <p>We do not control these third-party cookies. Please refer to each provider's own cookie policy for more information.</p>
          </Section>

          <Section number="4" title="How to Manage Cookies">
            <p>You have several options for managing or disabling cookies:</p>

            <h3>Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings. You can:</p>
            <ul>
              <li>View cookies currently stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific sites or all sites</li>
              <li>Set your browser to alert you when a cookie is being set</li>
            </ul>
            <p>Browser-specific instructions:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noreferrer">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
            </ul>

            <h3>Opt-Out Tools</h3>
            <ul>
              <li><strong>Google Analytics Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">Google Analytics Opt-Out Browser Add-on</a>.</li>
              <li><strong>Advertising Cookies:</strong> Visit <a href="https://www.youronlinechoices.com" target="_blank" rel="noreferrer">Your Online Choices</a> to manage advertising preferences.</li>
            </ul>

            <p className={styles.warning}>
              ⚠️ Please note: disabling essential cookies may affect the functionality of our website, including your ability to log in, enrol in courses, or complete payments.
            </p>
          </Section>

          <Section number="5" title="Cookie Consent">
            <p>
              When you first visit our website, you will be shown a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customise your preferences. Your consent is recorded and you may change your preferences at any time by clearing your browser cookies and revisiting the site.
            </p>
          </Section>

          <Section number="6" title="Do Not Track">
            <p>
              Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activities tracked. Our website does not currently respond to DNT signals as there is no consistent industry standard for handling such signals.
            </p>
          </Section>

          <Section number="7" title="Changes to This Policy">
            <p>
              We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised "Last updated" date. We encourage you to review this page regularly.
            </p>
          </Section>

          <Section number="8" title="Contact Us">
            <p>If you have any questions about our use of cookies, please contact us:</p>
            <div className={styles.contactBlock}>
              <p><strong>ProFRONTIER International Online Academy</strong></p>
              <p>📍 Middle East, Kuwait</p>
              <p>📧 <a href="mailto:info@ProFRONTIERonlinetraining.com">info@ProFRONTIERonlinetraining.com</a></p>
              <p>📧 <a href="mailto:profrontieronlineacademy@gmail.com">profrontieronlineacademy@gmail.com</a></p>
              <p>📞 +965-66779011 | +965-55377150</p>
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
