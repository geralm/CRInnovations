"use client";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
function DownloadButton({children,...props}) {
//   const handleClick = () => {
    // fs.writeFileSync('pdfs/someFile.pdf', anteproyecto.documento)
    // const pdfFilename = 'pdfs/someFile.pdf';
    // res.sendFile('pdfs/someFile.pdf', { root: './' })
//   };
  return (
    <Button {...props} variant="outlined" color="secondary" endIcon={<DownloadIcon />} className="w-46 h-11 rounded-full mt-5"  >
      {children}
    </Button>
  );
}
export default DownloadButton;
