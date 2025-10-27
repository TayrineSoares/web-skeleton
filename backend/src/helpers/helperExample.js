// HELPERS are reusable functions with side effects (e.g., send email).
// USED BY CONTROLLERS to abstract complex or repeatable tasks.


// EXAMPLE OF HELPER — Logs a formatted message (side effect)

/**
 * Logs a formatted notification message to the console
 * Could later be adapted to send an email, Slack message, etc.
 * 
 * @param {string} type - The type of message ("INFO", "ERROR", etc.)
 * @param {string} message - The message content
 */
const notifyAdmin = (type, message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
};

module.exports = notifyAdmin;

// Example usage:
// const notifyAdmin = require('../helpers/helperExample');
// notifyAdmin("info", "New user registered.");
// should console.log: [2025-10-27T13:51:00.000Z] [Info] New user registered.