export const courseLandingUrls = {
  "business-english": "https://be.profrontieracademy.com",
  "toefl": "https://toefl.profrontieracademy.com/",
  "aptis": "https://aptis.profrontieracademy.com/",
  "cambridge-english": "https://ce.profrontieracademy.com/",
  "pte": "https://pte.profrontieracademy.com/",
  "aptis-arabic": "https://aptisarabic.profrontieracademy.com/",
  "oet": "https://oet.profrontieracademy.com/",
  "ielts": "https://ielts.profrontieracademy.com/",
  "cphrm": "https://cphrm.profrontieracademy.com/",
  "cphq": "https://cphq.profrontieracademy.com/",
  "linkedin-optimization": "https://linkedin.profrontieracademy.com/",
  "pdp": "https://pdp-course.profrontieracademy.com/",
  "personality-development-program": "https://pdp-course.profrontieracademy.com/",
  "personality-dev": "https://pdp-course.profrontieracademy.com/",
  "basic-arabic-communication": "https://bac.profrontieracademy.com/",
  "business-arabic-academy": "https://baa.frontieronlinetraining.com/",
  "triple": "https://triple.profrontieracademy.com/"
};

/**
 * Returns the URL/route and whether it is external.
 * @param {string} slug - The course identifier
 * @returns {{ to: string, isExternal: boolean }}
 */
export function getCourseLink(slug) {
  const externalUrl = courseLandingUrls[slug];
  if (externalUrl) {
    return {
      to: externalUrl,
      isExternal: true
    };
  }
  return {
    to: `/courses/${slug}`,
    isExternal: false
  };
}
