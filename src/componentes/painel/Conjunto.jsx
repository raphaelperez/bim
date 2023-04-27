import { useState } from "react";

export default function Conjunto(props) {
  const [conjuntoFechado, setConjuntoFechado] = useState(true);

  const setConjuntoFechadoHandler = () => {
    setConjuntoFechado(!conjuntoFechado);
  };

  return (
    <div className="conjunto">
      <button className={`expandir-btn ${!conjuntoFechado ? "fechado" : ""}`} onClick={setConjuntoFechadoHandler}>
        <h2>{props.conjunto["nome"]}</h2>
        <img className={`expandir-btn-img ${conjuntoFechado ? "fechado" : ""}`} src="./icones/expandir.svg" alt="" />
      </button>
      <div className={`conjunto-corpo ${conjuntoFechado ? "fechado" : ""}`}>{props.children}</div>
    </div>
  );
}
