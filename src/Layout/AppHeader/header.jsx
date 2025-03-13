
import React, { useState } from 'react';
import HorizontalLinearStepper from '../../components/StepperNavigation/index'; 
import Orange from '../../assets/orange.svg'; 
import { Box } from '@mui/material';
import './Header.css'; 
import AfricId from '../../assets/AfricId.svg';
const Header = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <header className="header">
      <HorizontalLinearStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <Box className="logo-container">
        <img src={Orange} alt="Orange" className="orange" />
        <img src={AfricId} alt="AfricId" className='africId' />
      </Box>
    </header>
  );
};

export default Header;
