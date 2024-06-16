import { ProjectType } from "../../types/ProjectType";
import * as c from "../styles/ProjectDetail/ProjectContent";

type Props = {
  projectInfo: ProjectType;
};

const ProjectContent = ({ projectInfo }: Props) => {
  return (
    <c.ContentWrapper>
      <div>{projectInfo?.intro.background}</div>
    </c.ContentWrapper>
  );
};

export default ProjectContent;
