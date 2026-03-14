import { Typography, Box, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>

      <Typography variant="h4" gutterBottom>
        Bienvenido al IoT Dashboard
      </Typography>

      <Paper sx={{ p: 3, mt: 2, maxWidth: 800, mx: "auto" }}>
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

        {/* BOTÓN INICIAR */}
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