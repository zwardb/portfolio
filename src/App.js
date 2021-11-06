import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <About />
      </div>
    </Router>
  );
}

export default App;
