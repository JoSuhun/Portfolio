import * as h from "../styles/ProjectDetail/ProjectHeader";

type Props = {
  title: string;
  color: string;
  summary: string;
};
const ProjectHeader = ({ title, color, summary }: Props) => {
  return (
    <h.Header $color={color}>
      <div>
        {title} <span> - {summary}</span>
      </div>
    </h.Header>
  );
};

export default ProjectHeader;
