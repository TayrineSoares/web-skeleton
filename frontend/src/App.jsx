// Import global styles
import './styles/App.css';

// Import the component that holds all route definitions
import AppRoutes from './AppRoutes';

// Main App component — root of your frontend
function App() {
  return (
    <div>
    
      <h1>Inside App.jsx</h1>

      {/* Render the routing structure */}
      <AppRoutes />
    </div>
  );
}

// Export App so it can be used in main.jsx
export default App;
