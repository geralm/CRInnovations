import Header from "./Header.jsx";
import Section from "./Section.jsx";
export default function Curriculum({ children }) {
  return (
    <div className="grid grid-col-2">
      <Header >
        {children}
      </Header>
      {/* <Section w="1/2" color="bg-left" >{children.leftsection}</Section> */}
      {/* <Section w="auto" color="bg-right">{children.rightsection}</Section> */}
    </div>
  );
}
