// Centralized setup/config for third-party services like Stripe, Resend, etc.
// Example: `lib/stripe.js` exports a pre-configured Stripe instance.

/**
 * This file simulates a pre-configured instance of a third-party service.
 * In real use cases, this would be Stripe, Resend, etc.
 * 
 * For example:
 *   const stripe = require('stripe')(process.env.STRIPE_SECRET_SK);
 *   module.exports = stripe;
 */

// Simulated "library" setup
const fakeService = {
  send: (message) => {
    console.log(`[FakeService] Sending: ${message}`);
  }
};

module.exports = fakeService;

// Example usage:
// const fakeService = require('../lib/libExample');
// fakeService.send("Hello from lib!");