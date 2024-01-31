import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Section({ title, children }) {
    const titleArray = title.split(" ");

    return (
        <Box>
            <Container>
                <Box className="justify-center inline-block">
                    {titleArray.map((word, index) => (
                        <Typography
                            variant="h4"
                            key={index}
                            color={index >=1 ? "secondary" : null}
                            component="span"
                            sx={{
                                fontWeight: 700,
                            }}>
                            {word} {"  "}
                        </Typography>
                    ))}
                </Box>
                <Box>{"Hola hola soy una sección de prueba"}</Box>
            </Container>
        </Box>
    );
}

export default Section;
