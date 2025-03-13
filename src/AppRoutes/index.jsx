import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Layout from '../Layout/index'; 
import StepperNavigation from '../components/StepperNavigation/index';
import BienvenueSteps from '../components/Steps/BienvenueSteps/BienvenueSteps';
import AuthentificationSteps from '../components/Steps/AuthentificationSteps/AuthentificationSteps';
import FélicitationSteps from '../components/Steps/FélicitationSteps/FélicitationSteps';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Bienvenue" />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="/Bienvenue" element={<BienvenueSteps />} />
          <Route path="authentification" element={<AuthentificationSteps />} />
          <Route path="felicitation" element={<FélicitationSteps />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

