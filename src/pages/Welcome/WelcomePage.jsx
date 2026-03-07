import { useNavigate } from "react-router-dom"
import { Button, Box, Typography } from "@mui/material"

export default function WelcomePage(){

const navigate = useNavigate()

return(
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
    >
        <Typography variant="h3" gutterBottom>
            Bienvenido
        </Typography>

        <Button
            variant="contained"
            size="large"
            onClick={()=> navigate("/dashboard")}
        >
            Iniciar
        </Button>

    </Box>
)
}