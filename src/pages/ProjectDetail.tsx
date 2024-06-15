import { useParams } from "react-router-dom";
import projectsData from "../assets/my_projects.json";
import { useEffect, useState } from "react";
import ProjectHeader from "../components/ProjectDetail/ProjectHeader";
import * as p from "../components/styles/ProjectDetail/ProjectDetail";
import { ProjectType } from "../types/ProjectType";

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
        />
        <p.InnerWrapper>
          <div>{projectInfo?.title}</div>
          <div>{projectInfo?.link.github}</div>
        </p.InnerWrapper>
      </p.Wrapper>
    </>
  );
};

export default ProjectDetail;
