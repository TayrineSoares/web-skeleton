// Import React Router components needed for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the pages that will be rendered for each route
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

// Define all the frontend routes in one place
const AppRoutes = () => {
  return (
    // Wrap everything inside <Router> to enable client-side routing
    <Router>
      <Routes>
        {/* Define route for the homepage */}
        <Route path="/" element={<Home />} />

        {/* Define routes for pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
};

// Export this component to be used inside App.jsx
export default AppRoutes;
