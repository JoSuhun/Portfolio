import { useGLTF } from "@react-three/drei";

const BeachBallModel = () => {
  const { scene } = useGLTF("/img/beach_ball.glb");
  scene.traverse((child) => {
    if (child) {
      child.receiveShadow = true;
    }
  });

  return <primitive scale={3.5} object={scene} position={[0, -2.3, -1]} />;
};

export default BeachBallModel;
