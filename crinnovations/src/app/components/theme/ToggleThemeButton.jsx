"use client";
import { createContext, useContext } from "react";

import { useTheme } from "@mui/material";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = createContext({
    toggleColorMode: () => {
        console.log("toggleColorMode");
    },
});

function ToggleThemeButton() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

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
