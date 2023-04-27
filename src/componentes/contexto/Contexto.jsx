import "./Contexto.css";
import json from "./Contexto.json";

export default function Contexto(props) {
  return (
    <div className="contexto">
      <h2>
        {json[props.ambiente]} / {json[props.etapa]} / {json[props.disciplina]}
      </h2>
    </div>
  );
}
