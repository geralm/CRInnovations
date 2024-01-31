"use client";
import { Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DownloadButton from "./DownloadButton";
function Header({ children }) {
    const { firstName, lastName, occupation,image } = children;
    return (
        <Container disableGutters={true} className="flex flex-row items-center ">
            <Container className="basis-1/4 self-start py-5">
                <Box className="">
                    <Avatar
                        alt={firstName}
                        src={image}
                        sx={{ width: 100, height: 100 }}
                    />
                </Box>
            </Container>
            <Container className="basis-3/4 grid grid-rows-2 py-4">
                <Box
                    className="text-wrap "
                    sx={{
                        width: [200, 300],
                        fontFamily: "Roboto",
                    }}>
                    <Typography variant="h5">I'm</Typography>
                    <Typography
                        color="secondary"
                        variant="h4"
                        component="a"
                        sx={{
                            mr: 2,
                            display: { md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                            color: "secondary.main",
                        }}>
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
