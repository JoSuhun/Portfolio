import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../assets/my_projects.json";
import { useEffect, useState } from "react";
import ProjectHeader from "../components/ProjectDetail/ProjectHeader";
import * as p from "../components/styles/ProjectDetail/ProjectDetail";

import { ProjectType } from "../types/ProjectType";
import ProjectNav from "../components/ProjectDetail/ProjectNav";
import ProjectContent from "../components/ProjectDetail/ProjectContent";
import Footer from "../components/common/Footer";

import left_arrow from "/img/icons/left-arrow.png";
import home from "/img/icons/home.png";

const projects: Record<string, ProjectType> = projectsData;

const ProjectDetail = () => {
  const { name } = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProjectInfo(projects[name as string]);
  }, [name]);

  useEffect(() => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <p.Wrapper>
        <ProjectHeader
          title={projectInfo?.title as string}
          color={projectInfo?.theme_color as string}
          summary={projectInfo?.intro.summary as string}
        />
        <p.InnerWrapper>
          <ProjectNav
            title={projectInfo?.title as string}
            color={projectInfo?.theme_color as string}
            github={projectInfo?.link.github as string}
            notion={projectInfo?.link.notion as string}
          />
          <ProjectContent projectInfo={projectInfo as ProjectType} />
        </p.InnerWrapper>
        <p.BackBtn onClick={() => navigate(-1)}>
          <div>
            <img src={left_arrow} alt="left_arrow_icon" />
            <img src={home} alt="home_icon" />
          </div>
        </p.BackBtn>
      </p.Wrapper>
      <Footer />
    </>
  );
};

export default ProjectDetail;
