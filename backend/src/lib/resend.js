// LIB EXAMPLE — Centralized Resend client setup

const { Resend } = require('resend');

// Create and export a pre-configured Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = resend;

// Example usage in a helper or controller:
// const resend = require('../lib/resend');
// await resend.emails.send({ to, subject, html, from });