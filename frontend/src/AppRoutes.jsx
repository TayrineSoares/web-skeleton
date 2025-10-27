// Import necessary components from react-router-dom
import { Routes, Route } from 'react-router-dom';

// Import the pages that will be rendered for each route
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// Define all the frontend routes in one place
const AppRoutes = () => {
  return (

    <Routes>
      {/* Define route for the homepage */}
      <Route path="/" element={<Home />} />

      {/* Define routes for other pages */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>

  );
};

// Export this component to be used inside App.jsx
export default AppRoutes;
