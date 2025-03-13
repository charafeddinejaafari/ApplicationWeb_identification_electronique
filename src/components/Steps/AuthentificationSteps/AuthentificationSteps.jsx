import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AuthentificationSteps = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6">Authentification</Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate("/felicitation")}
      >
        Continuer
      </Button>
    </div>
  );
};

export default AuthentificationSteps;
