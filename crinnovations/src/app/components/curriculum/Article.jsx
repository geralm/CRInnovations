import Element from "./elementsFactory";
function Article({ name, children }) {
  const isObject = (value) => typeof value === "object" && value !== null;

  const renderObject = (obj) => {
    const elements = [];
    Object.keys(obj).forEach((key) => {
      if (isObject(obj[key])) {
        elements.push(<div key={key}>{renderObject(obj[key])}</div>);
      } else {
        elements.push(
          <Element ObjectKey={key}>
            {obj[key]}
          </Element>
        );
      }
    });
    return elements;
  };  
  // <li key={item}>{item}</li>

  return (
    <article className="text-gray-950 text-pretty ">
      <h2 className="text-2xl tracking-widest uppercase font-bold text-[#213D62] ">{name}</h2>
      <ul className="">
        {children.map((item) =>
          isObject(item) ? renderObject(item) : <li key={item}>{item}</li>
        )}
      </ul>
    </article>
  );
}

export default Article;
