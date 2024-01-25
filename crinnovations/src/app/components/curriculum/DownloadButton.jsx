"use client";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
function DownloadButton() {
  const handleClick = () => {
    // fs.writeFileSync('pdfs/someFile.pdf', anteproyecto.documento)
    // const pdfFilename = 'pdfs/someFile.pdf';
    // res.sendFile('pdfs/someFile.pdf', { root: './' })
    console.log("Downloading CV");
  };
  return (
    <Button variant="outlined" color="secondary" endIcon={<DownloadIcon />} onClick={handleClick} slot="rounded-full">
      Download CV
    </Button>
  );
}
export default DownloadButton;
