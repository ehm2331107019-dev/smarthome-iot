import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

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
Bienvenido al IoT Dashboard
</Typography>

<Button
variant="contained"
size="large"
onClick={()=>navigate("/dashboard")}
>
Iniciar
</Button>

</Box>
)
}