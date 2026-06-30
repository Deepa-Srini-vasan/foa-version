import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { contactInfo } from '../data/team';
import { courses } from '../data/courses';
import { countries } from '../data/overseas';
import { trackEvent } from '../utils/analytics';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';
  const initialType = searchParams.get('inquiry') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    country: '',
    service: initialService,
    inquiryType: initialType === 'it-services' ? 'it' : '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isSuccess: true });

  useEffect(() => {
    document.title = 'Contact Us — ProFRONTIER International Online Academy';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const getValidationClass = (name) => {
    if (!touched[name]) return '';
    const val = form[name] || '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val) ? styles.validInput : styles.invalidInput;
    }
    if (name === 'phone') {
      return val.trim().length >= 8 ? styles.validInput : styles.invalidInput;
    }
    return val.trim().length > 0 ? styles.validInput : styles.invalidInput;
  };

  const showToastMsg = (msg, success = true) => {
    setToast({ show: true, message: msg, isSuccess: success });
    setTimeout(() => {
      setToast({ show: false, message: '', isSuccess: true });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      showToastMsg('Please fill out all required fields.', false);
      return;
    }

    setLoading(true);

    // Track business lead conversion event
    trackEvent({
      eventName: 'ContactSubmit',
      category: 'Inquiry',
      label: form.inquiryType || 'General Enquiry',
      value: 1
    });

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      showToastMsg('Thank you! Your message has been sent successfully. We will get back to you shortly.', true);
      setForm({
        name: '',
        email: '',
        phone: '',
        course: '',
        country: '',
        service: '',
        inquiryType: '',
        message: '',
      });
      setTouched({});
    }, 1200);
  };

  return (
    <div>
      <PageBanner
        title="Contact Us"
        description="Have questions or ready to enroll? Reach out to our experts and get started today."
        category="Connect"
        breadcrumbs={[{ label: 'Contact' }]}
        hideGrid={true}
      />

      <section className={styles.contactSection}>
        {/* Background Effects */}
        <div className={styles.sectionBg}>
          <div className={styles.gridOverlay} />
          <div className={styles.glowBlob1} />
          <div className={styles.glowBlob2} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Heading */}
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Get In Touch</span>
            <h2 className={styles.sectionHeading}>
              Connect <span className={styles.sectionHeadingGradient}>With Us</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Have questions or ready to enroll? Fill out the form or reach out via our direct contact channels.
            </p>
          </div>

          <div className={styles.layout}>
            {/* Form Column */}
            <div className={`${styles.formCard} glow-card reveal`}>
              <div className={styles.formCardHeader}>
                <h3>Send us a Message</h3>
                <p>An advisor from our team will contact you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <div className={styles.inputWrapper}>
                    <span className={styles.inputIcon}><i className="fa-solid fa-user"></i></span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getValidationClass('name')}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-envelope"></i></span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getValidationClass('email')}
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-phone"></i></span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getValidationClass('phone')}
                        placeholder="+965-XXXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label htmlFor="course">Interested Course</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-book-open"></i></span>
                      <select
                        id="course"
                        name="course"
                        value={form.course || ''}
                        onChange={handleChange}
                      >
                        <option value="">Select a Course</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.slug}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Study Destination</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-earth-americas"></i></span>
                      <select
                        id="country"
                        name="country"
                        value={form.country || ''}
                        onChange={handleChange}
                      >
                        <option value="">Select a Country</option>
                        {countries.map((c) => (
                          <option key={c.id} value={c.slug}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label htmlFor="service">IT Service / Solution</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-laptop-code"></i></span>
                      <select
                        id="service"
                        name="service"
                        value={form.service || ''}
                        onChange={handleChange}
                      >
                        <option value="">Select a Service (If Applicable)</option>
                        <option value="web-dev">Web Development</option>
                        <option value="app-dev">App Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="hosting">Domain & Hosting</option>
                        <option value="design">Graphic Design</option>
                        <option value="custom-cms">Custom CMS</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <div className={styles.inputWrapper}>
                      <span className={styles.inputIcon}><i className="fa-solid fa-circle-question"></i></span>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={form.inquiryType || ''}
                        onChange={handleChange}
                      >
                        <option value="">Select Inquiry Type</option>
                        <option value="academy">Academy Enrollment</option>
                        <option value="overseas">Study Abroad Consultation</option>
                        <option value="it">B2B Technology Services</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <div className={styles.inputWrapper}>
                    <span className={`${styles.inputIcon} ${styles.textareaIcon}`}><i className="fa-solid fa-comment"></i></span>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getValidationClass('message')}
                      placeholder="Tell us about your learning goals..."
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--gradient btn--lg btn--full"
                >
                  {loading ? 'Sending Message...' : 'Send Message →'}
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className={styles.infoCol}>
              {/* Phone Card */}
              <div className={`${styles.infoCard} reveal reveal--delay-1`}>
                <div className={`${styles.infoIconCircle} ${styles.blueIcon}`}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className={styles.infoText}>
                  <h4>Phone Numbers</h4>
                  {contactInfo.phones.map((phone) => (
                    <p key={phone}>
                      <a href={`tel:${phone.replace(/-/g, '')}`}>{phone}</a>
                    </p>
                  ))}
                  <span className={styles.hours}>Available on WhatsApp</span>
                </div>
              </div>

              {/* Email Card */}
              <div className={`${styles.infoCard} reveal reveal--delay-2`}>
                <div className={`${styles.infoIconCircle} ${styles.purpleIcon}`}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className={styles.infoText}>
                  <h4>Email Addresses</h4>
                  {contactInfo.emails.map((email) => (
                    <p key={email}>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  ))}
                </div>
              </div>

              {/* Location Cards */}
              {contactInfo.offices && contactInfo.offices.map((office, idx) => (
                <div key={office.country} className={`${styles.infoCard} ${styles.officeCard} reveal reveal--delay-${3 + idx}`}>
                  <div className={`${styles.infoIconCircle} ${idx % 2 === 0 ? styles.blueIcon : styles.purpleIcon}`}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className={styles.infoText}>
                    <div className={styles.officeHeader}>
                      <h4>{office.country} Office</h4>
                      <span className={`${styles.statusBadge} ${office.status === 'Active' ? styles.statusActive : styles.statusComing}`}>
                        {office.status}
                      </span>
                    </div>
                    <p className={styles.officeName}>{office.name}</p>
                    <p className={styles.officeAddress}>{office.address}</p>
                    <p className={styles.officePhone}>
                      <i className="fa-solid fa-phone" style={{ marginRight: '6px', fontSize: '11px', opacity: 0.7 }}></i>
                      {office.phone}
                    </p>
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.mapLink}
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              ))}

              {/* Hours Card */}
              <div className={`${styles.infoCard} reveal reveal--delay-4`}>
                <div className={`${styles.infoIconCircle} ${styles.purpleIcon}`}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className={styles.infoText}>
                  <h4>Office Hours</h4>
                  <p>Saturday – Thursday</p>
                  <p>9:00 AM – 9:00 PM (AST)</p>
                  <p className={styles.subtext}>Friday: Closed / Online Support Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''}`} style={{ borderColor: toast.isSuccess ? 'rgba(0, 212, 170, 0.3)' : 'rgba(239, 68, 68, 0.3)' }}>
        <i className={toast.isSuccess ? "fa-solid fa-circle-check" : "fa-solid fa-triangle-exclamation"} style={{ color: toast.isSuccess ? 'var(--teal)' : '#EF4444', marginRight: '8px' }}></i>
        {toast.message}
      </div>
    </div>
  );
}
