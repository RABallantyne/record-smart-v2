import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './dist/css/style.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
      </>
    </Router>
  );
}

export default App;
