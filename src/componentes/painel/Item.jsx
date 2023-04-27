export default function Item(props) {
  return (
    <div className="item">
      <div className="item-img">{props.item["img"] != "" && <img src={props.item["img"]} alt="" />}</div>
      <div className="item-textos">
        <div className="item-infos">
          {props.item["infos"].map((info) => {
            return (
              <div key={info["id"]} className="item-info">
                <h4>{info["titulo"]}</h4>
                <p>{info["info"]}</p>
              </div>
            );
          })}
        </div>
      </div>
      {props.item["url"] != "" && (
        <a className="item-link" href={props.item["url"]} target="_blank">
          <img src="./icones/link.svg" alt="" />
        </a>
      )}
    </div>
  );
}
