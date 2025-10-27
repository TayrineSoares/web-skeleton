//REQUIRE LIBRARIES & ENV VARIABLES
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// OPTIONAL: Import Supabase client if needed
//const supabase = require('./supabase/db');

// Stripe setup (used for payment processing)
const stripe = require('stripe')(process.env.STRIPE_SECRET_SK);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// single source of truth for where the frontend lives
// Define where the frontend lives (used for CORS)
// Helpful to keep this in .env for different environments (local, staging, prod)
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// ----------------------------------------------------------------------------

//IMPORT ROUTES
const testRouter = require('./src/routes/testRoutes');


// --------------------------------------------------------------------
// INITIALIZE EXPRESS
const app = express();
const PORT = process.env.PORT || 8080;

//---------------------------------------------------------------------
//MIDDLEWARE

// CORS: Allows frontend to talk to backend (adjust domains as needed)
// using a deployed on vercel example
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:8080',
    'https://frontenddomain', // ← update with real domain
    'https://frontenddomain.vercel.app', // ← update with real domain
  ],
  credentials: true  // allows cookies & credentials to be sent
}));

// Logger: Logs incoming requests in the console
app.use(morgan('dev'));

// Parses incoming JSON requests (e.g., req.body)
app.use(express.json());


//------------------------------------------------------------------------------
//ROUTES

// Test Route, helpful for confirming the backend is running
// Go to http://localhost:8080 
// In your browser we should see "Backend is running"
app.get('/', (req, res) => {
  res.send('Backend is running');
});


//Add routers as they are built
// Prefix routes with /api to clearly separate backend API from frontend routes
// Helps avoid conflicts and makes backend endpoints more organized
app.use('/api/test', testRouter);


//-------------------------------------------------------------------------
// EXPORT APP

// For serverless deployments (e.g., Vercel), export the app
module.exports = app;
// ----------------------------------------------------------------------

// RUN LOCALLY ONLY
// This check prevents the app from auto-starting when imported by something else (e.g., Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);

  });
}
