import { useGLTF } from "@react-three/drei";

const BeachBallModel = () => {
  const { scene } = useGLTF("/img/beach_ball.glb");
  scene.traverse((child) => {
    if (child) {
      child.receiveShadow = true;
    }
  });

  return <primitive scale={5} object={scene} position={[0, -8.1, -1]} />;
};

export default BeachBallModel;
