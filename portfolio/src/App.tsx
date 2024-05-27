import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["lightgrey"]}></color>
    </Canvas>
  );
}

export default App;
