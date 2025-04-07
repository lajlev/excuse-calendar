import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import SavedExcusesPage from './pages/SavedExcuses';
import Roadmap from './pages/Roadmap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedExcusesPage />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
