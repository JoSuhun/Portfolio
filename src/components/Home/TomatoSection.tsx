import * as h from "../styles/Home";
import { Canvas } from "@react-three/fiber";
import TomatoGlbModel from "./TomatoGlbModel";
import { OrbitControls } from "@react-three/drei";

const TomatoSection = () => {
  return (
    <h.GlbWrapper>
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          // aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 100,
          position: [5, 5, 8],
        }}
      >
        <OrbitControls enableZoom={false} />
        <directionalLight intensity={1} position={[1, 1, 1]} />
        <directionalLight intensity={1} position={[100, -1, -1]} />
        <directionalLight intensity={1} position={[100, 100, -50]} />
        <TomatoGlbModel />
      </Canvas>
    </h.GlbWrapper>
  );
};

export default TomatoSection;
