import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './dist/css/style.css';
import Navbar from './components/Navbar';
import TestComp from './components/TestComp';

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Route exact path='/' component={TestComp} />
      </div>
    </Router>
  );
}

export default App;
