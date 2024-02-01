"use client";
import Header from "./Header/Header.jsx";
import Container from "@mui/material/Container";
import AboutMe from "./Sections/AboutMe.jsx";
import Box from "@mui/material/Box";
import SectionTitle from "./SectionTitle.jsx";
export default function Curriculum({ children }) {
    return (
        <div>
            <Header>{children}</Header>
            <Container className="grid grid-row-2">
                <Box className="flex justify-center mb-5">
                    <SectionTitle>{"ABOUT ME"}</SectionTitle>
                </Box>
                <AboutMe>{children}</AboutMe>
            </Container>
     
        </div>
    );
}
