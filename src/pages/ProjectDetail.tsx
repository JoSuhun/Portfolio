import { useParams } from "react-router-dom";
import { ProjectType } from "../types/ProjectType";
import projectsData from "../assets/my_projects.json";
import { useEffect, useState } from "react";
import ProjectHeader from "../components/ProjectDetail/ProjectHeader";

const projects: Record<string, ProjectType> = projectsData;

const ProjectDetail = () => {
  const { name } = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectType | null>(null);

  useEffect(() => {
    setProjectInfo(projects[name as string]);
  }, [name]);

  return (
    <>
      <ProjectHeader title={projectInfo?.title as string} />
      <div>{projectInfo?.title}</div>
      <div>{projectInfo?.link.github}</div>
    </>
  );
};

export default ProjectDetail;
