import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Section({ title, children }) {
    const titleArray = title.split(" ");
    return (
        <Box>
            <Container className="grid grid-row-2">
                <Container className="flex justify-center mb-5">
                    <Box>
                        {titleArray.map((word, index) => (
                            <Typography
                                variant="h4"
                                key={index}
                                color={index >= 1 ? "secondary" : null}
                                component="span"
                                sx={{
                                    fontWeight: 700,
                                }}>
                                {word} {"  "}
                            </Typography>
                        ))}
                    </Box>
                </Container>
                <Container className="flex flex-wrap sm:flex-row">
                    <Container className="sm:basis-1/2 flex md:justify-center">
                        <Box>{"Hola hola soy una sección de prueba"}</Box>
                    </Container>
                    <Container className="sm:basis-1/2 flex md:justify-center">
                        <Box>{"Hola hola soy una sección de prueba"}</Box>
                    </Container>
                </Container>
            </Container>
        </Box>
    );
}

export default Section;
