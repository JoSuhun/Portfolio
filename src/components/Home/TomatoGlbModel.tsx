import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  setTomatoHovered: (hovered: boolean) => void;
};

const TomatoGlbModel = ({ setTomatoHovered }: Props) => {
  const { scene } = useGLTF("/img/tomato.glb");
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
    setTomatoHovered(true);
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
    setTomatoHovered(false);
  };

  return (
    <primitive
      ref={ref}
      scale={0.9}
      object={scene}
      position-y={-4}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

export default TomatoGlbModel;
