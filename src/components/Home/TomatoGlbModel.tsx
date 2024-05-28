import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TomatoGlbModel = () => {
  const { scene } = useGLTF("/img/tomato.glb");
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={ref} scale={0.9} object={scene} position-y={-4} />;
};

export default TomatoGlbModel;
