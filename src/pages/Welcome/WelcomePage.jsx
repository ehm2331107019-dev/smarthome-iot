import { Typography, Box, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>

      <Typography
        variant="h4"
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          mb: 3
        }}
      >
        Bienvenido al IoT Dashboard
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 800,
          mx: "auto",
          borderTop: "4px solid",
          borderColor: "primary.main"
        }}
      >
        <Typography paragraph>
          Este sistema SmartHome permite monitorear y controlar dispositivos
          inteligentes conectados mediante tecnología IoT (Internet of Things).
        </Typography>

        <Typography paragraph>
          Desde este dashboard puedes visualizar información en tiempo real
          proveniente de sensores como temperatura, humedad y detección de gas.
        </Typography>

        <Typography paragraph>
          También podrás administrar dispositivos, revisar estadísticas y
          configurar los parámetros de tu sistema SmartHome de forma sencilla.
        </Typography>

        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/dashboard"
          sx={{ mt: 2 }}
        >
          Iniciar
        </Button>

      </Paper>

    </Box>
  );
}