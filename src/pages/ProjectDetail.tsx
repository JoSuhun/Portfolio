import { useParams } from "react-router-dom";
import projectsData from "../assets/my_projects.json";
import { useEffect, useState } from "react";
import ProjectHeader from "../components/ProjectDetail/ProjectHeader";
import * as p from "../components/styles/ProjectDetail/ProjectDetail";

import { ProjectType } from "../types/ProjectType";
import ProjectNav from "../components/ProjectDetail/ProjectNav";
import ProjectContent from "../components/ProjectDetail/ProjectContent";
import Footer from "../components/common/Footer";

const projects: Record<string, ProjectType> = projectsData;

const ProjectDetail = () => {
  const { name } = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectType | null>(null);

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
          <ProjectNav title={projectInfo?.title as string} />
          <ProjectContent projectInfo={projectInfo as ProjectType} />
        </p.InnerWrapper>
      </p.Wrapper>
      <Footer />
    </>
  );
};

export default ProjectDetail;
