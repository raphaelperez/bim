import "./Menu.css";

export default function Toggle(props) {
  return (
    <>
      <button className={`menu-toggle ${!props.menuFechado ? "fechado" : ""}`} onClick={props.setMenuFechadoHandler}>
        <img src="./icones/menu.svg" alt="" />
      </button>
      <button className={`menu-toggle ${props.menuFechado ? "fechado" : ""}`} onClick={props.setMenuFechadoHandler}>
        <img src="./icones/fechar.svg" alt="" />
      </button>
    </>
  );
}
