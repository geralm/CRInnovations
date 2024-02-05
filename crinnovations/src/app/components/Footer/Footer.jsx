"use client";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
function Social({ icon, href, children }) {
    return (
        <Link href={href} underline="none" color="inherit">
            <Box className="flex flex-row mx-5" sx={{ fontWeight: 100 }}>
                {icon}
                {children}
            </Box>
        </Link>
    );
}

function Footer({ children }) {
    return (
        <Box  sx={{ backgroundColor: "secondary.main" }} className="py-10">
            <Box
                className="flex flex-row justify-center pb-10"
               >
                {children.github && (
                    <Social
                        icon={<GitHubIcon fontSize="large" />}
                        href={children.github}></Social>
                )}

                {children.whatsapp && (
                    <Social
                        icon={<WhatsAppIcon fontSize="large" />}
                        href={children.whatsapp}></Social>
                )}

                {children.instagram && (
                    <Social
                        icon={<InstagramIcon fontSize="large" />}
                        href={children.instagram}></Social>
                )}
            </Box>
            <Box className="flex justify-center ">
                &copy; {new Date().getFullYear()} {"Creado por CRInnovations"}
            </Box>
        </Box>
    );
}

export default Footer;
