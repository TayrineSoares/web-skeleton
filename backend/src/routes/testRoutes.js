// Always import express and router 
const express = require('express');
const router = express.Router();

// Import Supabase when needed
//const { supabase } = require('../../supabase/db');

//GET /api/test
// Access it at: http://localhost:8080/api/test
router.get('/', async (req, res) => {
  console.log("Test route is running!")
  res.send("To be seen on the browser: Test route is running");

});


// Export the router so it can be used in server.js or app.js
module.exports = router;



