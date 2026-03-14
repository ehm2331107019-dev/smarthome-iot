import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function RegisterPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper sx={{ p: 4, width: 350 }}>

        <Typography variant="h5" mb={2}>
          Registro
        </Typography>

        <TextField
          label="name"
          fullWidth
          margin="normal"
        />

        <TextField
          label="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          createAt
        </Button>

      </Paper>
    </Box>
  );
}