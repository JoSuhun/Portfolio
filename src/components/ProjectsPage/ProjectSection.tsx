import * as p from "../styles/ProjectsPage/ProjectSection";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  return (
    <p.ProjectContainer>
      <ProjectItem
        title="StellAR"
        date="2024. 04. 08. ~ 2024. 05. 20."
        content="증강현실(AR)과 3D 맵을 활용한 별자리 앱 서비스"
      />
      <ProjectItem
        title="너에게, 로그인"
        date="2024. 01. 03. ~ 2024. 02. 16."
        content="WebRTC 기술 기반의 원격 사진 촬영 SNS"
      />
      <ProjectItem
        title="Neureka"
        date="2024. 02. 26. ~ 2024. 04. 05."
        content="사용자 맞춤 증권 기사 추천 서비스"
      />
    </p.ProjectContainer>
  );
};

export default ProjectSection;
