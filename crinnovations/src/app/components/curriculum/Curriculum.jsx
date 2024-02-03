"use client";
import Header from "./Header/Header.jsx";
import Container from "@mui/material/Container";
import AboutMe from "./Sections/AboutMe.jsx";
import Box from "@mui/material/Box";
import SectionTitle from "./SectionTitle.jsx";
import Skills from "./Sections/Skills.jsx";
const background_image = "./background/curriculum-header.jpg";

function BackgroundImage({ children }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${background_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            {children}
        </Box>
    );
}

export default function Curriculum({ children }) {
    return (
        <div>
            <BackgroundImage>
                <Header>{children}</Header>
            </BackgroundImage>
            <Container
                disableGutters={false}
                className="flex flex-wrap md:flex-row mt-10">
                <AboutMe>{children}</AboutMe>
            </Container>
            <Box className=" bg-zinc-800">
                <Container
                    disableGutters={true}
                    className="grid grid-row-2 mt-10">
                    <Box className="flex justify-center my-10">
                        <SectionTitle>{"SKILLS"}</SectionTitle>
                    </Box>
                    <Skills>{children}</Skills>
                </Container>
            </Box>
            <BackgroundImage>
                <Container className="grid grid-row-2 ">
                    <Box className="flex justify-center my-10">
                        <SectionTitle>{"PORTFOLIO"}</SectionTitle>
                    </Box>
                    <Box className="flex flex-row justify-center">
                         

                    </Box>
                </Container>
            </BackgroundImage>
            <Box className="bg-zinc-800">
                <Container className="grid grid-row-2 ">
                    <Box className="flex justify-center mb-5">
                        <SectionTitle>{"TESTIMONIOS"}</SectionTitle>
                    </Box>
                </Container>
            </Box>
            {/* Footer (redes sociales  logo de github, logo de whatsapp y logo de instagram) */}
        </div>
    );
}
