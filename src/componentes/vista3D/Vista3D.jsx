import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

import Modelo from "./Modelo.jsx";
import Tags from "./Tags.jsx";
import json from "./Vista3D.json";
import "./Vista3D.css";

export default function Vista3D(props) {
  return (
    <div className="canvas">
      <Canvas flat camera={{ position: [-3, 7, 8], fov: 70, near: 0.1, far: 200 }}>
        <OrbitControls enableDamping={true} />
        <Modelo ambiente={props.ambiente} etapa={props.etapa} json={json} />
        {props.mostrarTags && <Tags ambiente={props.ambiente} etapa={props.etapa} disciplina={props.disciplina} />}
      </Canvas>
    </div>
  );
}
