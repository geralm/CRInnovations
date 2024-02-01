"use client";
import { Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DownloadButton from "./DownloadButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
function Header({ children }) {
    const { firstName, lastName, occupation, image } = children;
    return (
        <Container
            disableGutters={true}
            className="flex flex-row items-center ">
            <Container className="basis-1/4  self-start py-5 md:basis-1/2">
                <Avatar
                    alt={firstName}
                    src={image}
                    sx={{
                        width: 100,
                        height: 100,
                        display: { xs: "flex", md: "none" },
                    }}
                />
                <CardMedia
                    component="img"
                    image={image}
                    alt={"Profile picture"}
                    sx={{
                        width: 200,
                        height: 200,
                        display: { xs: "none", md: "flex" },
                    }}
                />
            </Container>
            <Container className="basis-3/4 md:basis-1/2 grid grid-rows-2 py-4">
                <Box
                    className="text-wrap "
                    sx={{
                        fontFamily: "Roboto",
                    }}>
                    <Typography
                        color="secondary"
                        variant="h3"
                        component="a"
                        sx={{
                            mr: 2,
                            display: { md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                            color: "secondary.main",
                        }}
                        className="mt-5 uppercase">
                        {firstName} {lastName}
                    </Typography>
                    <Typography variant="h4">{occupation}</Typography>
                </Box>
                <Box className="mt-3">
                    <DownloadButton>Download cv</DownloadButton>
                </Box>
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
