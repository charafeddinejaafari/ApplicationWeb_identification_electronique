import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const BienvenueSteps = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6">Bienvenue</Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/authentification")}
      >
        Continuer
      </Button>
    </div>
  );
};

export default BienvenueSteps;
