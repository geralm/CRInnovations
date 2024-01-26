import Article from "./Article";
function Section({ w, color, children }) {
  return (
    <div className={`flex flex-col ${color} w-${w} divide-y-4 divide-[#213D62]/25`}>
      {children.map((i) => (
        <Article key={i.name} name={i.name}>{i.values}</Article>
      ))}
    </div>
  );
}

export default Section;
