import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material"

import DashboardIcon  from "@mui/icons-material/Dashboard"
import DevicesIcon  from "@mui/icons-material/Devices"
import SettingsIcon  from "@mui/icons-material/Settings"

import {Link, useLocation} from "react-router-dom"
import {drawerWidth} from "./constants"

export default function Sidebar({open, onClose, isMobile}){
    const location = useLocation();
    const handleClick = () =>{
        if (isMobile) onClose();
    };
    const drawerContent = (
        <>
            {}
            <Toolbar />
            <List>

                {/* Dashboard */}
                <ListItemButton
                    component = {Link}
                    to = "/dashboard"
                    selected = {location.pathname === "/dashboard"}
                    onClick={handleClick}
                >
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard"></ListItemText>
                </ListItemButton>

                {/* Devices */}
                <ListItemButton
                    component = {Link}
                    to = "/devices"
                    selected = {location.pathname === "/devices"}
                    onClick={handleClick}
                >
                    <ListItemIcon><DevicesIcon /></ListItemIcon>
                    <ListItemText primary="Devices"></ListItemText>
                </ListItemButton>

                {/* Settings */}
                <ListItemButton
                    component = {Link}
                    to = "/settings"
                    selected = {location.pathname === "/settings"}
                    onClick={handleClick}
                >
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings"></ListItemText>
                </ListItemButton>

            </List>
        </>
    );
    
    return(
        <Drawer 
            variant={isMobile ? "temporary" : "permanent"}
            open = {open}
            onClose= {onClose}
            ModalProps= {{keepMounted: true}}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper":{
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
        >
            {drawerContent}
        </Drawer>
    )
}