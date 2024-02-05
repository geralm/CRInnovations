import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import SectionTitle from "../SectionTitle";
function Item({ tag, children }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ marginRight: "8px" }} color="text.secondary">
                {tag}
                {":"}
            </Typography>
            <Typography>{children}</Typography>
        </Box>
    );
}
function Article({ name, children }) {
    return (
        <Box className="sm:basis-1/2 flex flex-col md:justify-center mb-5">
            <Typography  variant="h5">
                <strong>{name}</strong>
            </Typography>
            {children}
        </Box>
    );
}

export default function AboutMe({ children }) {
    const {
        firstName,
        lastName,
        age,
        contact,
        languages,
        email,
        description,
        image,
        experience,
    } = children;

    return (
        <>
            <Box className="flex">
                <Card
                    className={`mb-10 md:mb-0 flex md:w-96 md:h-96 `}
                    sx={{ display: { xs: "none", md: "flex" } }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={"Profile picture"}
                        sx={{
                            display: "flex" ,
                        }}
                    />
                </Card>
            </Box>
            <Box className="flex flex-col basis-1/2 md:ml-20 ">
                <SectionTitle>{"ABOUT ME"}</SectionTitle>
                <Container disableGutters={true} className="flex flex-col mt-5">
                    <Article name={"Personal Info"}>
                        <Box className="flex flex-col">
                            <Item tag="First Name">{firstName}</Item>
                            <Item tag="Last Name">{lastName}</Item>
                            <Item tag="Age">{age}</Item>
                            <Item tag="Phone">{contact.phoneNumber}</Item>
                            <Item tag="Email">{email}</Item>
                            <Item tag="Languages">{languages.join(", ")}</Item>
                        </Box>
                    </Article>
                    <Article name={"Description"}>
                        <Box className="flex text-justify">
                            <Typography>{description}</Typography>
                        </Box>
                    </Article>
                </Container>
            </Box>
            <Box className="mt-10">
                <Article name={"Experience"} >
                        <Box className="list-none text-justify">
                            {experience.map((job, index) => (
                                <li key={index} className="mt-4">
                                    <Typography variant="h6">
                                        {job.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">{job.company}</Typography>
                                    <Typography color="text.secondary">{job.date}</Typography>
                                    <Typography variant="body2">
                                        {job.description}
                                    </Typography>
                                </li>
                            ))}
                        </Box>
                </Article>
            </Box>
        </>

        
    );
    
}
