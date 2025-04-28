import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Chatbot from './components/Chatbot'; // Import Chatbot Component

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes for the app */}
        <Routes>
          <Route path="/" element={<Chatbot />} /> {/* Home route that renders the Chatbot */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
