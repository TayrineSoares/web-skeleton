//Import BrowserRouter and alias it as Router for cleaner use
import { BrowserRouter as Router } from 'react-router-dom'; 

// Import global styles
import './styles/App.css';

// Import the component that holds all route definitions
import AppRoutes from './AppRoutes';

// Import layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Main App component — root of the frontend UI
function App() {
  return (
    // Router provides routing context to all child components
    <Router >
      
      {/* Navbar stays visible on all pages */}
      
      <Navbar />
      
      {/* Render the routing structure */}
      <div id="main-content"> 
        <AppRoutes />
      </div>
      

      {/* Footer stays visible on all pages */}
      <Footer />
    </Router>

  );
}

// Export App to be used in main.jsx
export default App;
