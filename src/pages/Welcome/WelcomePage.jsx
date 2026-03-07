import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {

  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
      }}
    >
      <Typography variant="h3" gutterBottom>
        Bienvenido al IoT Dashboard
      </Typography>

      <Typography variant="h6" sx={{ mb: 4 }}>
        Sistema de monitoreo de sensores
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handleStart}
      >
        Iniciar
      </Button>
    </Box>
  );
}