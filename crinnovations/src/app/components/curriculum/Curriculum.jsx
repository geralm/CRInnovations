import Header from "./Header.jsx";
import Section from "./Section.jsx";
export default function Curriculum({ children }) {
  return (
    <div className="grid grid-col-2">
      <Header lastname={children.lastname} name={children.name} image='https://images.unsplash.com/photo-1705351953374-76117bc519e1?q=80&w=3861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Section w="1/2" color="bg-left" >{children.leftsection}</Section>
      <Section w="1/2" color="bg-right">{children.rightsection}</Section>
      {/* <Section w={64} color="bg-stone-500">{children.rightsection}</Section> */}
    </div>
    // <div className="container flex flex-wrap "> {//flex-col xl:flex-row
    // }
    //   <div className="container flex flex-col justify-center">

    //   </div>

    // </div>
  );
}
