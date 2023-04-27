import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Desenho from "./Desenho";

import "./Vista2D.css";

export default function Vista2D(props) {
  return (
    <Canvas orthographic camera={{ position: [1, 1, 1], up: [0, 0, 1], far: 10 }}>
      <Desenho ambiente={props.ambiente} etapa={props.etapa} />
      <OrbitControls enableRotate={false} />
    </Canvas>
  );
}
