/**
 * Helper to map legacy emoji icons to FontAwesome classes.
 * If the input is already a FontAwesome class string, it returns it as is.
 */
export function getFaIcon(icon) {
  if (!icon) return 'fa-solid fa-circle-info';
  
  const trimmed = icon.trim();
  if (trimmed.startsWith('fa-')) return trimmed;

  const mapping = {
    // Categories
    '📚': 'fa-solid fa-book-open',
    '🌍': 'fa-solid fa-earth-americas',
    '💰': 'fa-solid fa-coins',
    '💻': 'fa-solid fa-laptop-code',
    '👔': 'fa-solid fa-user-tie',
    '✈️': 'fa-solid fa-plane',
    '🧠': 'fa-solid fa-brain',
    '🦺': 'fa-solid fa-helmet-safety',
    '🏥': 'fa-solid fa-hospital',

    // Courses & general
    '📝': 'fa-solid fa-file-signature',
    '🏥': 'fa-solid fa-user-nurse',
    '🗣️': 'fa-solid fa-comments',
    '📖': 'fa-solid fa-book-open',
    '🎓': 'fa-solid fa-graduation-cap',
    '💼': 'fa-solid fa-briefcase',
    '🎙️': 'fa-solid fa-microphone-lines',
    '🇫🇷': 'fa-solid fa-language',
    '🇩🇪': 'fa-solid fa-language',
    '🇨🇳': 'fa-solid fa-language',
    '🇯🇵': 'fa-solid fa-language',
    '🇹🇷': 'fa-solid fa-language',
    '🌟': 'fa-solid fa-star',
    '🏆': 'fa-solid fa-trophy',
    '🎯': 'fa-solid fa-bullseye',
    '📊': 'fa-solid fa-chart-simple',
    '🏛️': 'fa-solid fa-building-columns',
    '🎖️': 'fa-solid fa-award',
    '📈': 'fa-solid fa-chart-line',
    '📉': 'fa-solid fa-arrow-trend-down',
    '⚙️': 'fa-solid fa-gear',
    '👥': 'fa-solid fa-users',
    '🤝': 'fa-solid fa-handshake',
    '🛫': 'fa-solid fa-plane-departure',
    '🔰': 'fa-solid fa-shield-halved',
    '🚑': 'fa-solid fa-kit-medical',
    '🔥': 'fa-solid fa-fire-extinguisher',
    '⚡': 'fa-solid fa-bolt',
    '⏱': 'fa-regular fa-clock',
    '⭐': 'fa-solid fa-star',
    '✅': 'fa-solid fa-circle-check',
    '🛡️': 'fa-solid fa-shield-halved',
    '⚖️': 'fa-solid fa-scale-balanced',

    // Countries
    '🇦🇺': 'fa-solid fa-map-location-dot',
    '🇬🇧': 'fa-solid fa-landmark',
    '🇺🇸': 'fa-solid fa-building-columns',
    '🇨🇦': 'fa-solid fa-tree',
    '🇮🇪': 'fa-solid fa-clover',
    '🇩🇪': 'fa-solid fa-gears',
    '🇫🇷': 'fa-solid fa-archway',
    '🇳🇿': 'fa-solid fa-compass',

    // Extra
    '👄': 'fa-solid fa-comments',
    '💪': 'fa-solid fa-dumbbell',
    '🎵': 'fa-solid fa-music',
    '🎶': 'fa-solid fa-music',
    '🚀': 'fa-solid fa-rocket',
    '👨‍🏫': 'fa-solid fa-chalkboard-user',
    '🌱': 'fa-solid fa-seedling',
    '👑': 'fa-solid fa-crown',
    '📧': 'fa-solid fa-envelope',
    '📞': 'fa-solid fa-phone',
    '📍': 'fa-solid fa-location-dot',
    '⏰': 'fa-solid fa-clock',
  };

  return mapping[trimmed] || 'fa-solid fa-circle-info';
}
