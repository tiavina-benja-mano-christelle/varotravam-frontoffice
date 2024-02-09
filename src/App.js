import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import DetailsAnnonces from './pages/DetailsAnnonces';
import Annonces from './pages/Annonces';
import Message from './pages/Message';
import Profil from './pages/Profil';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';


function App() {  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Annonces />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/DetailsAnnonces/:id" element={<DetailsAnnonces />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
