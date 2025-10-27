// UTILS are pure functions with no side effects.
// Used across the app for formatting, calculating, or manipulating data (e.g., `formatPrice`, `calculateDistance`).


//EXAMPLE OF UTILITY - Capitalize the first letter of a name

/**
 * Capitalizes the first letter of a string
 * @param {string} name - The name to capitalize
 * @returns {string} Capitalized name
 */
const capitalizeName = (name) => {
  if (!name || typeof name !== 'string') return '';
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

module.exports = capitalizeName;

// Example usage:
// const capitalizeName = require('../utils/utilExample');     adjust path
// const result = capitalizeName("tayrine"); // "Tayrine"