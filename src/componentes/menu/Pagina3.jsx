export default function Pagina2(props) {
  const voltarHandler = () => {
    props.setPagina("pagina-2");
  };

  const setTarefaHandler = (btn) => {
    props.setTarefa(btn.target.value);
  };

  return (
    <div className="menu-pagina">
      <div>
        <h2>Tarefas</h2>
        <ul>
          {props.json["tarefas"][props.ambiente][props.fase].map((tarefa) => {
            return (
              <li className="list-item" key={tarefa["id"]}>
                <button
                  className={`menu-btn ${tarefa["nome"] == props.tarefa ? "ativo" : ""}`}
                  value={tarefa["nome"]}
                  onClick={setTarefaHandler}
                >
                  {tarefa["titulo"]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu-navegacao">
        <button onClick={voltarHandler}>
          <img src="./icones/voltar.svg" alt="" />
          <p>Fases</p>
        </button>
      </div>
    </div>
  );
}
