// Header.jsx
// Header.jsx
import React, { useState } from 'react';
import HorizontalLinearStepper from '../../components/HorizontalLinearStepper/index'; // Vérifie le chemin
import Orange from '../../assets/orange.png'; // Vérifie que l'image existe et a la bonne extension
import { Box } from '@mui/material';
import './Header.css'; // Import du fichier CSS

const Header = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <header className="header">
      <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <Box className="logo-container">
        <img src={Orange} alt="Orange" className="logo" />
      </Box>
    </header>
  );
};

export default Header;
