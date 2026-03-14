import{
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

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

                <Typography variant="h6" sx={{flexGrow: 1}}>
                    IoT Dashboard - SmartHome
                </Typography>

                {/* BOTONES DERECHA */}
                <Box>
                    <Button color="inherit">Login</Button>
                    <Button color="inherit">Register</Button>
                </Box>

            </Toolbar>
        </AppBar>
    );
}