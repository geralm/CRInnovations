"use client";
import { Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DownloadButton from "./DownloadButton";
function Header({children}) {
    const {firstName, lastName , image} = children;
    return (
        <Container disableGutters={true} className="grid grid-cols-2">
            <Container className="flex flex-wrap">
                <Box className="py-5">
                    <Typography
                        variant="h3"
                        noWrap
                        component="a"
                        sx={{ 
                            mr: 2,
                            display: {  md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                            {firstName}
                        </Typography>
                        <Typography>
                            {lastName}
                        </Typography>
                </Box>
                <Box className="">
                    <DownloadButton>Download cv</DownloadButton>
                </Box>
            </Container>
            <Container className="flex">
                <Avatar
                    className=""
                    alt={firstName}
                    src={image}
                    sx={{ width: 100, height: 100 }}
                />
            </Container>
        </Container>
    );
}  
export default Header;

// shift + alt + s (Abre el menu de arriba)
// shift + alt + f (Formatea el codigo)
// ctrl + shift + p (Abre el menu de comandos)
// ctrl + shift + i (Abre las herramientas de desarrollador en el navegador)
// ctrl + , (Abre las configuraciones)
// ctrl + shift + f (Busca en todo el proyecto)
