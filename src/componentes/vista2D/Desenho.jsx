import { Html } from "@react-three/drei";

export default function Desenho(props) {
  return (
    <Html center distanceFactor={1} zIndexRange={[1, 0]}>
      <img className="desenho" src={`./desenhos/${props.ambiente}-${props.etapa}-planta-0001.webp`} alt="" />
      <img className="desenho" src={`./desenhos/${props.ambiente}-${props.etapa}-planta.svg`} alt="" />
    </Html>
  );
}
