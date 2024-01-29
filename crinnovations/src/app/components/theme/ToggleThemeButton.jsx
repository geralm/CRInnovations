"use client";

import { useTheme } from "@mui/material";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useContext } from "react";
import { ColorModeContext } from "@/app/theme/ToggleThemeProvider";
//This is the context that will be used to toggle the theme


function ToggleThemeButton() {
    
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext); //This context is from ToogleThemeProvider
    // const colorMode = useContext(ColorModeContext);

    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit">
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    );
}

export default ToggleThemeButton;
