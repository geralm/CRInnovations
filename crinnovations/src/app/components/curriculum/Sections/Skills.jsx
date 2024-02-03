import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DoneIcon from '@mui/icons-material/Done';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
function SkillsGroup({ name = "", children, icon = <DoneIcon color="primary" />}) {
    return (
        <>
            <Typography
                variant="h5"
                component="h2"
                color="secondary"
                className="uppercase">
                {name}
            </Typography>
            <Box className="list-image-none my-5">
                {children.map((item, index) => (
                    <li key={index} className="flex ">
                        {item.isStrong ? <StarRateIcon color="primary" /> : <StarOutlineIcon color="primary" />}
                        <Typography variant="body1">
                            {item.skill}
                        </Typography>
                    </li>
                ))}
            </Box>
        </>
    );
}

export default function Skills({ children }) {
    const { hard, soft } = children.skills;
    return (
        <Container className="flex flex-row justify-evenly">
            <Box>
                <SkillsGroup name="Soft Skills">{soft}</SkillsGroup>
            </Box>
            <Box>
                <SkillsGroup name="Hard Skills" icon={<DoneIcon color="primary"/>}>{hard}</SkillsGroup>
            </Box>
        </Container>
    );
}
