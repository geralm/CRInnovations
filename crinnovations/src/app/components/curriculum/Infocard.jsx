
function Infocard({ name, children }) {
  return (
    <article className="py-2 text-gray-950 text-balance">
      <h2>{name}</h2>
      <ul>
        {children.map((item) =>(<li key={item}>{item}</li>))}
      </ul>
    </article>
  );
}
export default Infocard;
