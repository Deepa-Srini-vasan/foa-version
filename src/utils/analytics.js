/**
 * Unified Analytics & Event Tracking Helper for ProFRONTIER
 * Supports Google Analytics (gtag), GTM (dataLayer), and Meta Pixel (fbq).
 */
export function trackEvent({ eventName, category, label, value, ...customData }) {
  // 1. Console logging for debugging in local development
  const isLocal = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    
  if (isLocal) {
    console.log(`[Telemetry Event] Name: "${eventName}" | Category: "${category}" | Label: "${label}" | Value: ${value}`, customData);
  }

  // 2. Google Analytics (gtag.js) Event Tracking
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value,
      ...customData
    });
  }

  // 3. Google Tag Manager (GTM) dataLayer triggers
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      eventCategory: category,
      eventAction: eventName,
      eventLabel: label,
      eventValue: value,
      ...customData
    });
  }

  // 4. Meta Pixel (fbq) tracking
  if (typeof window.fbq === 'function') {
    if (eventName === 'Lead' || eventName === 'ContactSubmit' || eventName === 'Registration') {
      window.fbq('track', 'Lead', { content_category: category, content_name: label, value: value });
    } else if (eventName === 'CourseView' || eventName === 'ViewContent') {
      window.fbq('track', 'ViewContent', { content_category: category, content_name: label });
    } else {
      window.fbq('trackCustom', eventName, { category, label, value, ...customData });
    }
  }
}
