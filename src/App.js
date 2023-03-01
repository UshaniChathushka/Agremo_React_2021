import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Lands from './pages/Lands';
import Exportation from './pages/Exportation';
import LegalInfo from './pages/LegalInfo';
import Register from './pages/Register';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Land' component={Lands} />
        <Route path='/Exportation' component={Exportation} />
        <Route path='/Legal Info' component={LegalInfo} />
        <Route path='/Register' component={Register} />
        
      </Routes>
    </Router>
  );
}
  
export default App;