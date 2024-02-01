import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
function Item({ tag, children }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ marginRight: "8px" }}color="text.secondary">
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
            <Typography variant="inherit">
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
        github,
        description,
        images,
    } = children;

    return (
        <Container className="flex flex-wrap-reverse  justify-evenly sm:flex-row">
            <Box className=" md:basis-1/3 ">
                <Card >
                    <CardMedia
                        component="img"
                        height="275"
                        image={images[0].src}
                        alt={images[0].title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {images[0].title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {images[0].description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box className="basis-2/4">
                <Article name={"Personal Info"}>
                    <Box className="flex flex-col sm:flex-row ">
                        <Box className="flex flex-col ">
                            <Item tag="First Name">{firstName}</Item>
                            <Item tag="Last Name">{lastName}</Item>
                            <Item tag="Age">{age}</Item>
                            <Item tag="Phone">{contact.phoneNumber}</Item>
                        </Box>
                        <Box className="flex flex-col sm:ml-10">
                            <Item tag="Email">{email}</Item>
                            <Item tag="Languages">{languages.join(", ")}</Item>
                            <Item tag="Instagram">
                                <Link href={contact.instagram} underline="none">
                                    {"gera_lm_"}
                                </Link>
                            </Item>
                            <Item tag="Github">
                                <Link href={github} underline="none">
                                    {"geralm"}
                                </Link>
                            </Item>
                        </Box>
                    </Box>
                </Article>
                <Article name={"Description"} >
                    <Box className="flex text-balance">
                        <Typography>{description}</Typography>
                    </Box>
                </Article>
            </Box>
        </Container>
    );
}
