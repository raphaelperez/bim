import { useEffect, useState } from "react";

import Toggle from "./Toggle";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import json from "./Menu.json";
import "./Menu.css";

export default function Menu(props) {
  const [menuFechado, setMenuFechado] = useState(false);
  const [pagina, setPagina] = useState("pagina-1");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMenuFechado(true);
    }
  }, []);

  const setMenuFechadoHandler = () => {
    setMenuFechado(!menuFechado);
  };

  return (
    <div className="menu">
      <dir className={`menu-ancora ${menuFechado ? "fechado" : ""}`}>
        <Toggle menuFechado={menuFechado} setMenuFechadoHandler={setMenuFechadoHandler} />
        <div className="menu-quadro">
          <h1>{json["projeto"]}</h1>
          <div className={`menu-paginas-ancora ${pagina}`}>
            <Pagina1 ambiente={props.ambiente} setAmbiente={props.setAmbiente} setPagina={setPagina} json={json} />
            <Pagina2
              ambiente={props.ambiente}
              etapa={props.etapa}
              setEtapa={props.setEtapa}
              disciplina={props.disciplina}
              setDisciplina={props.setDisciplina}
              setPagina={setPagina}
              json={json}
            />
          </div>
        </div>
      </dir>
    </div>
  );
}
