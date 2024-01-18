import Infocard from "./Infocard.jsx";

export default function Curriculum({ children }) {
  return (
    <div className="container flex flex-wrap "> {//flex-col xl:flex-row
    }
      <div className="container flex flex-col justify-center">
        <div className="bg-orange-500">
          <h2>Imagen aquí</h2>
        </div>
        <div className="bg-cyan-950">
          <h1>{children.name + " " + children.lastname}</h1>
        </div>
      </div>
   
        <div className="container flex flex-col bg-slate-400">
          <Infocard name="Contacto">{children.contact}</Infocard>
          <Infocard name="Habilidades">{children.skills}</Infocard>
          <Infocard name="Lenguajes">{children.languages}</Infocard>
        </div>

   
    </div>
  );
}
