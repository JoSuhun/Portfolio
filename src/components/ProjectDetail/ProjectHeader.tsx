import * as h from "../styles/ProjectDetail/ProjectHeader";

type Props = {
  title: string;
  color: string;
};
const ProjectHeader = ({ title, color }: Props) => {
  return <h.Header $color={color}>{title}</h.Header>;
};

export default ProjectHeader;
