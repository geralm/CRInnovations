"use client";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
export default function Curriculum({ children }) {
  return (
    <div>
      <Header >
        {children}
      </Header>
      
      <Section title={"About Me"}>{children}</Section>
      {/* <Section w="1/2" color="bg-left" >{children.leftsection}</Section> */}
      {/* <Section w="auto" color="bg-right">{children.rightsection}</Section> */}
    </div>
  );
}
