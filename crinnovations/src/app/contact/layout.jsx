import "./page.module.css";
import Navbar from "../components/navbar/navbar";
export default function curriculumLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  );
}
