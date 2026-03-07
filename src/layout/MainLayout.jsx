import {
    Box,
    Toolbar,
    useTheme,
    useMediaQuery
} from "@mui/material"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    const them = useTheme();
    const isMobile = useMediaQuery(them.breakpoints.down("md"));
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    return(
        <Box sx={{display: "flex"}}>
            <Navbar 
                toggleDrawer = {toggleDrawer}
                isMobile = {isMobile}
            />
            <Sidebar
                open = {open}
                onClose = {toggleDrawer}
                isMobile = {isMobile}
            />
            <Box
                component = "main"
                sx = {{
                    flexGrow: 1,
                    p: 3
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}