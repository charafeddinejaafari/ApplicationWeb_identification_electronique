import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CircleIcon from "@mui/icons-material/Circle";
import BienvenueSteps from "../Steps/BienvenueSteps/BienvenueSteps";
import AuthentificationSteps from "../Steps/AuthentificationSteps/AuthentificationSteps";
import FélicitationSteps from "../Steps/FélicitationSteps/FélicitationSteps";
import "./index.css"; 

const steps = [
  { label: "Bienvenue", path: "/Bienvenue" },
  { label: "Authentification", path: "/authentification" },
  { label: "Félicitation", path: "/felicitation" },
];

const getStepIcon = (index, activeStep) => {
  if (index < activeStep) {
    return <CheckCircleIcon color="primary" />;
  } else if (index === activeStep) {
    return <RadioButtonCheckedIcon color="primary" />;
  } else {
    return <CircleIcon sx={{ color: "#ccc" }} />;
  }
};

const StepperNavigation = () => {
  const location = useLocation();
  const activeStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <Box className="custom-stepper-container">
      <Stepper activeStep={activeStep} alternativeLabel className="custom-stepper">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel icon={getStepIcon(index, activeStep)}>
              <Typography className={`step-label ${index === activeStep ? "active" : "inactive"}`}>
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box className="step-content">
        {activeStep === 0 && <BienvenueSteps />}
        {activeStep === 1 && <AuthentificationSteps />}
        {activeStep === 2 && <FélicitationSteps />}
      </Box>
    </Box>
  );
};
export default StepperNavigation;