import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function SectionTitle({ children }) {
    const titleArray = children.split(" ");
    return (
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
    );
}
