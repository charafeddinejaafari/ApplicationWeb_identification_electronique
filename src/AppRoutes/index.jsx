import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/index'; // Assure-toi que le chemin est correct

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;

