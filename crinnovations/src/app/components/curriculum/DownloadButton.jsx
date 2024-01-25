"use client";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
function DownloadButton({...props}) {
//   const handleClick = () => {
    // fs.writeFileSync('pdfs/someFile.pdf', anteproyecto.documento)
    // const pdfFilename = 'pdfs/someFile.pdf';
    // res.sendFile('pdfs/someFile.pdf', { root: './' })
//   };
  return (
    <Button {...props} variant="outlined" color="secondary" endIcon={<DownloadIcon />} slot="rounded-full">
      Download CV
    </Button>
  );
}
export default DownloadButton;
