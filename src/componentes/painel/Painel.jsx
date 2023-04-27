import { useEffect, useState } from "react";

import Toggle from "./Toogle";
import Conjunto from "./Conjunto";
import Item from "./Item";

import json from "./Painel.json";
import "./Painel.css";

export default function Painel(props) {
  const [painelFechado, setPainelFechado] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPainelFechado(true);
    }
  }, []);

  const setPainelFechadoHandler = () => {
    setPainelFechado(!painelFechado);
  };

  return (
    <div className="painel">
      <dir className={`painel-ancora ${painelFechado ? "fechado" : ""}`}>
        <Toggle painelFechado={painelFechado} setPainelFechadoHandler={setPainelFechadoHandler} />
        <div className="painel-quadro">
          {props.disciplina != "NONE" &&
            json[props.ambiente]["etapas"][props.etapa]["disciplinas"][props.disciplina]["conjuntos"].map(
              (conjunto) => {
                return (
                  <Conjunto key={conjunto["id"]} conjunto={conjunto}>
                    {conjunto["itens"].map((item) => {
                      return <Item key={item["id"]} item={item} />;
                    })}
                  </Conjunto>
                );
              }
            )}
        </div>
      </dir>
    </div>
  );
}
