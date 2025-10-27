// BASIC SETUP FOR SUPABASE (SERVER-SIDE)

// createClient(url, key) is a function from the @supabase/supabase-js library 
// it returns a Supabase client object, that can be used to run queries like:
// const { data, error } = await supabase.from('products').select('*')
// The SERVICE ROLE KEY has elevated privileges (like inserting/updating users, bypassing RLS), IT SHOULD ONLY BE USED ON THE SERVER SIDE

// Load environment variables from .env file
require('dotenv').config();

//Import the Supabase client constructor
const { createClient } = require('@supabase/supabase-js');

// Create a Supabase client using the project's URL and the service role key
const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

//// Export so it can be used in other backend files 
module.exports = supabase;