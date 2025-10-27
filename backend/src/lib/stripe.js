// LIB EXAMPLE — Centralized Stripe client setup

const Stripe = require('stripe');

// Create and export a pre-configured Stripe instance
const stripe = Stripe(process.env.STRIPE_SECRET_SK);

module.exports = stripe;

// Example usage in a controller:
// const stripe = require('../lib/stripe');
// const session = await stripe.checkout.sessions.create({...});