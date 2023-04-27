import * as THREE from "three";
import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Modelo(props) {
  const meshes = useMemo(() => {
    const meshes = {};

    for (const ambiente in props.json["arquivos"]) {
      meshes[ambiente] = {};
      for (const etapa in props.json["arquivos"][ambiente]) {
        const gltf = useGLTF(props.json["arquivos"][ambiente][etapa]["gltf"]);
        const mesh = gltf.scene.children[0];
        meshes[ambiente][etapa] = mesh;
      }
    }

    return meshes;
  }, []);

  const texturas = useMemo(() => {
    const texturas = {};

    for (const ambiente in props.json["arquivos"]) {
      texturas[ambiente] = {};
      for (const etapa in props.json["arquivos"][ambiente]) {
        const textura = useLoader(TextureLoader, props.json["arquivos"][ambiente][etapa]["textura"]);
        textura.encoding = THREE.sRGBEncoding;
        textura.flipY = false;
        texturas[ambiente][etapa] = textura;
      }
    }

    return texturas;
  }, []);

  return (
    <group>
      {props.json["ambientes"][props.ambiente].map((ambiente) => {
        return (
          <mesh
            key={props.ambiente + ambiente + "-3D"}
            geometry={meshes[ambiente][props.etapa].geometry}
            position={[
              meshes[ambiente][props.etapa].position.x,
              meshes[ambiente][props.etapa].position.y,
              meshes[ambiente][props.etapa].position.z,
            ]}
          >
            <meshBasicMaterial map={texturas[ambiente][props.etapa]} />
          </mesh>
        );
      })}
    </group>
  );
}
