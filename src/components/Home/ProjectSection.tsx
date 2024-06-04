import * as h from "../styles/Home";
import stellAR from "/img/project/StellAR_logo.png";
import NeoRo from "/img/project/NeoRo_logo.png";
import Neureka from "/img/project/Neureka_logo.png";

const ProjectSection = () => {
  return (
    <h.Wrapper>
      <p className="typing">Projects,</p>
      <div className="title">저의 프로젝트를 소개합니다.</div>
      <h.ProjectContainer>
        <h.ProjectItem>
          <h.ProjectThumbnail>
            <img src={stellAR} />
          </h.ProjectThumbnail>
          <h.ProjectContent>
            <p className="project_title">StellAR</p>
            <p>2024. 04. 08. ~ 2024. 05. 20.</p>
            <p>증강현실(AR)과 3D 맵을 활용한 별자리 앱 서비스</p>
          </h.ProjectContent>
        </h.ProjectItem>
        <h.ProjectItem>
          <h.ProjectThumbnail>
            <img src={NeoRo} />
          </h.ProjectThumbnail>
          <h.ProjectContent>
            <p className="project_title">너에게, 로그인</p>
            <p>2024. 01. 03. ~ 2024. 02. 16.</p>
            <p>WebRTC 기술 기반의 원격 사진 촬영 SNS</p>
          </h.ProjectContent>
        </h.ProjectItem>
        <h.ProjectItem>
          <h.ProjectThumbnail>
            <img src={Neureka} />
          </h.ProjectThumbnail>
          <h.ProjectContent>
            <p className="project_title">Neureka</p>
            <p>2024. 02. 26. ~ 2024. 04. 05.</p>
            <p>사용자 맞춤 증권 기사 추천 서비스</p>
          </h.ProjectContent>
        </h.ProjectItem>
      </h.ProjectContainer>
    </h.Wrapper>
  );
};

export default ProjectSection;
