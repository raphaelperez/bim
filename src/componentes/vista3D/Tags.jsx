import { Vector3 } from "three";
import { Html } from "@react-three/drei";

import json from "./Tags.json";

export default function Tags(props) {
  return (
    <group>
      {json[props.ambiente]["etapas"][props.etapa]["disciplinas"][props.disciplina]["tags"].map((tag) => {
        return (
          <Html
            key={tag["id"]}
            wrapperClass="tag"
            occlude={true}
            distanceFactor={4}
            zIndexRange={[2, 0]}
            position={new Vector3(tag["posicao"]["x"], tag["posicao"]["y"], tag["posicao"]["z"])}
          >
            <div className="tag-chamada">
              <img src="./icones/tag.svg" alt="" />
            </div>
            <div className="tag-textos">
              <h2>{tag["conjunto"]}</h2>
              <p>{tag["descricao"]}</p>
            </div>
          </Html>
        );
      })}
    </group>
  );
}
