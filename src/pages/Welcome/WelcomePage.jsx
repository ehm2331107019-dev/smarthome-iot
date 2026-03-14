import { Typography, Box, Paper } from "@mui/material";

export default function WelcomePage() {
  return (
    <Box>

      <Typography variant="h4" gutterBottom>
        Bienvenido al IoT Dashboard
      </Typography>

      <Paper sx={{p:3, mt:2}}>
        <Typography variant="body1" paragraph>
          Este sistema SmartHome permite monitorear y controlar dispositivos
          inteligentes conectados mediante tecnología IoT (Internet of Things).
        </Typography>

        <Typography variant="body1" paragraph>
          Desde este dashboard puedes visualizar información en tiempo real
          proveniente de sensores como temperatura, humedad y detección de gas.
        </Typography>

        <Typography variant="body1">
          También podrás administrar dispositivos, revisar estadísticas y
          configurar los parámetros de tu sistema SmartHome de forma sencilla
          desde una sola plataforma.
        </Typography>

      </Paper>

    </Box>
  );
}