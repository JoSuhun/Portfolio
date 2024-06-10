import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();
  return <div>{progress.toFixed(2)} % loaded</div>;
};

export default Loading;
