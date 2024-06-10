type Props = {
  progress: number;
};

const Loading = ({ progress }: Props) => {
  return <div>{progress} % loaded</div>;
};

export default Loading;
