import{
    AppBar,
    Toolbar,
    Typography,
    IconButton
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
                {}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge = "start"
                        onClick={toggleDrawer}
                        sx={{mr: 2}}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6">
                    IoT Dashboard - Enrique Mateo Segundo
                </Typography>
            </Toolbar>
        </AppBar>
    );
}