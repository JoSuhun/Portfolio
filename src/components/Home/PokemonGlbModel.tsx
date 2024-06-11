import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type Props = {
  pikaClicked: boolean;
  setPikaClicked: (clicked: boolean) => void;
};

const PokemonGlbModel = ({ pikaClicked, setPikaClicked }: Props) => {
  const { scene, animations } = useGLTF("/img/pokemon.glb");
  const ref = useRef<THREE.Mesh>(null);
  const { actions } = useAnimations(animations, ref);
  const [currentAction, setCurrentAction] = useState("Idle");
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
    const nextAction = currentAction === "Idle" ? "Dance" : "Idle";
    setCurrentAction(nextAction);
    setPikaClicked(!pikaClicked);
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
      scale={3}
      object={scene}
      position-y={1}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
};

export default PokemonGlbModel;
