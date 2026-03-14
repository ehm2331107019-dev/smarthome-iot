import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function LoginPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper sx={{ p: 4, width: 350 }}>
        
        <Typography variant="h5" mb={2}>
          Iniciar Sesión
        </Typography>

        <TextField
          label="Correo"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Iniciar sesión
        </Button>

      </Paper>
    </Box>
  );
}