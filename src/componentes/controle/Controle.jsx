import json from "./Controle.json";

import "./Controle.css";

export default function Controle(props) {
  const setVistaDoisDHandler = () => {
    props.setVista("2D");
  };

  const setVistaTresDHandler = () => {
    props.setVista("3D");
  };

  const qtdeDeDisciplinas = json[props.ambiente]["disciplinas"][props.etapa].length;
  const indiceDaDisciplina = json[props.ambiente]["disciplinas"][props.etapa].indexOf(props.disciplina);
  const indiceDaEtapa = json[props.ambiente]["etapas"].indexOf(props.etapa);
  const ultimaEtapa = json[props.ambiente]["etapas"][json[props.ambiente]["etapas"].length - 1];

  const avançarDisciplina = () => {
    if (indiceDaDisciplina + 1 < qtdeDeDisciplinas) {
      props.setDisciplina(json[props.ambiente]["disciplinas"][props.etapa][indiceDaDisciplina + 1]);
    }
    if (indiceDaDisciplina + 1 == qtdeDeDisciplinas && props.etapa != ultimaEtapa) {
      props.setEtapa(json[props.ambiente]["etapas"][indiceDaEtapa + 1]);
      props.setDisciplina(json[props.ambiente]["disciplinas"][json[props.ambiente]["etapas"][indiceDaEtapa + 1]][0]);
    }
  };

  const voltarDisciplina = () => {
    if (indiceDaDisciplina > 0) {
      props.setDisciplina(json[props.ambiente]["disciplinas"][props.etapa][indiceDaDisciplina - 1]);
    }
    if (indiceDaDisciplina == 0 && props.etapa != "etapa-01") {
      props.setEtapa(json[props.ambiente]["etapas"][indiceDaEtapa - 1]);
      props.setDisciplina(
        json[props.ambiente]["disciplinas"][json[props.ambiente]["etapas"][indiceDaEtapa - 1]][
          json[props.ambiente]["disciplinas"][json[props.ambiente]["etapas"][indiceDaEtapa - 1]].length - 1
        ]
      );
    }
  };

  const setMostrarTagsHandler = () => {
    if (props.mostrarTags == true) {
      props.setMostrarTags(false);
    } else {
      props.setMostrarTags(true);
    }
  };

  return (
    <div className="controle-ancora">
      <div className="controle-grafico">
        <button
          className={`controle-btn esquerda ${props.vista == "2D" ? "ativo" : ""}`}
          onClick={setVistaDoisDHandler}
        >
          2D
        </button>
        <button className={`controle-btn direita ${props.vista == "3D" ? "ativo" : ""}`} onClick={setVistaTresDHandler}>
          3D
        </button>
      </div>
      <div className="controle-disciplina">
        <button className="controle-btn esquerda" onClick={voltarDisciplina}>
          {indiceDaDisciplina == 0 && props.etapa == "ETP-01" ? (
            <img src="./icones/para_tras_inativo.svg" alt="" />
          ) : (
            <img src="./icones/para_tras.svg" alt="" />
          )}
        </button>
        <button className="controle-btn direita" onClick={avançarDisciplina}>
          {indiceDaDisciplina + 1 == qtdeDeDisciplinas && props.etapa == ultimaEtapa ? (
            <img src="./icones/para_frente_inativo.svg" alt="" />
          ) : (
            <img src="./icones/para_frente.svg" alt="" />
          )}
        </button>
      </div>
      {props.vista == "3D" && (
        <div className="controle-mostrar-tags">
          <button className={`controle-btn unico ${props.mostrarTags ? "ativo" : ""}`} onClick={setMostrarTagsHandler}>
            <img src="./icones/mostrar_tags.svg" alt="" />
          </button>
        </div>
      )}
    </div>
  );
}
