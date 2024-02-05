"use client";
import Header from "./Header/Header.jsx";
import Container from "@mui/material/Container";
import AboutMe from "./Sections/AboutMe.jsx";
import Box from "@mui/material/Box";
import SectionTitle from "./SectionTitle.jsx";
import Skills from "./Sections/Skills.jsx";
import Reviews from "./Sections/Reviews.jsx";
const background_image = "./background/curriculum-header.png";

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
        <>
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
                    className="grid grid-row-2 mt-20">
                    <Box className="flex justify-center my-10">
                        <SectionTitle>{"SKILLS"}</SectionTitle>
                    </Box>
                    <Skills>{children}</Skills>
                </Container>
            </Box>
            {/* <BackgroundImage>
                <Container className="grid grid-row-2 ">
                    <Box className="flex justify-center my-10">
                        <SectionTitle>{"PORTFOLIO"}</SectionTitle>
                    </Box>
                    <Box className="flex flex-row justify-center">
                         

                    </Box>
                </Container>
            </BackgroundImage> */}
            { children.reviews && children.reviews.length>0 && 
            <Box>
                <Container className="flex flex-col justify-center my-20">
                    <Box className="flex justify-center mb-5">
                        <SectionTitle>{"Reviews"}</SectionTitle>
                    </Box>
                    <Box className="flex justify-center">
                        <Reviews>{children.reviews}</Reviews>
                    </Box>
                </Container>
            </Box>
            }
        </>
    );
}
