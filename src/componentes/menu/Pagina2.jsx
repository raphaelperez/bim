export default function Pagina2(props) {
  const voltarHandler = () => {
    props.setPagina("pagina-1");
  };

  const setEtapaHandler = (btn) => {
    let f = parseInt(btn.target.value.slice(-1));
    let t = "DCP-" + f.toString() + "1";
    props.setEtapa(btn.target.value);
    props.setDisciplina(t);
  };

  const setDisciplinaHandler = (btn) => {
    props.setDisciplina(btn.target.value);
  };

  return (
    <div className="menu-pagina">
      <div>
        <h2>Etapas</h2>
        <ul>
          {props.json["etapas"][props.ambiente].map((etapa) => {
            return (
              <li className="list-item" key={etapa["id"]}>
                <button
                  className={`menu-btn ${etapa["nome"] == props.etapa ? "ativo" : ""}`}
                  value={etapa["nome"]}
                  onClick={setEtapaHandler}
                >
                  {etapa["titulo"]}
                </button>
              </li>
            );
          })}
        </ul>

        <h2>Disciplinas</h2>
        <ul>
          {props.json["disciplinas"][props.ambiente][props.etapa].map((disciplina) => {
            return (
              <li className="list-item" key={disciplina["id"]}>
                <button
                  className={`menu-btn ${disciplina["nome"] == props.disciplina ? "ativo" : ""}`}
                  value={disciplina["nome"]}
                  onClick={setDisciplinaHandler}
                >
                  {disciplina["titulo"]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu-navegacao">
        <button onClick={voltarHandler}>
          <img src="./icones/voltar.svg" alt="" />
          <p>Ambientes</p>
        </button>
      </div>
    </div>
  );
}
