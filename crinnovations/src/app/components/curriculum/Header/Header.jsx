"use client";
import { Avatar } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import DownloadButton from "./DownloadButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
function Header({ children }) {
    const { firstName, lastName, occupation, image } = children;
    const theme = useTheme();
    return (
        <Container disableGutters={true} className="flex flex-row mt-5">
            <Container className=" basis-1/4 md:basis-1/2 flex justify-center ">
                <Avatar
                    alt={firstName}
                    src={image}
                    sx={{
                        width: 100,
                        height: 100,
                        display: { xs: "flex", md: "none" },
                    }}
                />
                <Card className={`flex basis-3/5`}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={"Profile picture"}
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    />
                </Card>
            </Container>
            <Container className="basis-3/4 md:basis-1/2 flex justify-center md:justify-start">
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

                    <DownloadButton>Download cv</DownloadButton>
                </Box>
                {/* <Box className="mt-3 ">
                </Box> */}
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
