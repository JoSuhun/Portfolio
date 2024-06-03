import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PokemonGlbModel = () => {
  const { scene, animations } = useGLTF("/img/pokemon.glb");
  const ref = useRef<THREE.Mesh>(null);
  const { actions } = useAnimations(animations, ref);
  const [currentAction, setCurrentAction] = useState("Dance");
  scene.traverse((child) => {
    if (child) {
      child.castShadow = true;
    }
  });

  useEffect(() => {
    if (actions[currentAction]) {
      actions[currentAction]?.reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions[currentAction]) {
        actions[currentAction]?.fadeOut(0.5);
      }
    };
  }, [actions, currentAction]);

  const handleClick = () => {
    const nextAction = currentAction === "Dance" ? "Idle" : "Dance";
    setCurrentAction(nextAction);
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <primitive
      ref={ref}
      scale={4}
      object={scene}
      position-y={-3.3}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

export default PokemonGlbModel;
