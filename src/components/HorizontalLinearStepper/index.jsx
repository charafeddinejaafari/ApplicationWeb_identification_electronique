import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CircleIcon from '@mui/icons-material/Circle';
import './index.css'; 
import BienvenueSteps from '../Steps/BienvenueSteps';
import AuthentificationSteps from '../Steps/AuthentificationSteps';

import FélicitationSteps from '../Steps/FélicitationSteps';
const steps = ['Bienvenue', 'Authentification', 'Félicitation'];

export default function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0); 

  const getStepIcon = (index) => {
    if (index < activeStep) {
      return <CheckCircleIcon color="primary" />; 
    } else if (index === activeStep) {
      return <RadioButtonCheckedIcon color="primary" />; 
    } else {
      return <CircleIcon sx={{ color: '#ccc' }} />; 
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BienvenueSteps />;
      case 1:
        return <AuthentificationSteps />;
      case 2:
        return <FélicitationSteps />;
      
      default:
        return 'Étape inconnue';
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box className="custom-stepper-container">
      <Stepper activeStep={activeStep} alternativeLabel className="custom-stepper">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel icon={getStepIcon(index)}>
              <Typography className={`step-label ${index === activeStep ? 'active' : 'inactive'}`}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box className="step-content">{getStepContent(activeStep)}</Box>

      <Box className="button-container">
        <Button onClick={handleBack} disabled={activeStep === 0} className="button-back" variant="contained">
          Back
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1} className="button-next" variant="contained">
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
