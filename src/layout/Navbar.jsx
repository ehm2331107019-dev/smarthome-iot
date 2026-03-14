import{
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"

export default function Navbar({toggleDrawer, isMobile}){
    return(
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar>

                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{mr: 2}}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{flexGrow:1, textDecoration:"none", color:"inherit"}}
                >
                    IoT Dashboard - SmartHome
                </Typography>

                {/* BOTONES */}
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Inicio
                    </Button>

                    <Button color="inherit">
                        Login
                    </Button>

                    <Button color="inherit">
                        Register
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    );
}