export default function Pagina1(props) {
  const avancarHandler = () => {
    props.setPagina("pagina-2");
  };

  const setAmbienteHandler = (btn) => {
    props.setAmbiente(btn.target.value);
  };

  return (
    <div className="menu-pagina">
      <div>
        <h2>Ambientes</h2>
        <ul>
          {props.json["ambientes"].map((ambiente) => {
            return (
              <li className="list-item" key={ambiente["id"]}>
                <button
                  className={`menu-btn ${ambiente["nome"] == props.ambiente ? "ativo" : ""}`}
                  value={ambiente["nome"]}
                  onClick={setAmbienteHandler}
                >
                  {ambiente["titulo"]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="menu-navegacao">
        <div></div>
        <button onClick={avancarHandler}>
          <p>Etapas</p>
          <img src="./icones/avancar.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
