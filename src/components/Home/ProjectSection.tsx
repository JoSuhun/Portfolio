import { useSetAtom } from "jotai";
import * as h from "../styles/Home/Home";
import * as p from "../styles/Home/ProjectSection";
import ProjectItem from "./ProjectItem";
import { useEffect, useRef, useState } from "react";
import { ProjectsAtom } from "../../stores/NavAtom";

const ProjectSection = () => {
  const Ref = useRef<HTMLDivElement | null>(null);
  const SetProjectsRef = useSetAtom(ProjectsAtom);
  useEffect(() => {
    if (Ref.current) {
      SetProjectsRef(Ref.current);
    }
  }, [Ref, SetProjectsRef]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <h.Wrapper ref={Ref}>
      <div className={scrollPosition > 1500 ? "header focused" : "header"}>
        <p className="typing">Projects,</p>
        <div className="title">저의 프로젝트를 소개합니다.</div>
      </div>
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
    </h.Wrapper>
  );
};

export default ProjectSection;
