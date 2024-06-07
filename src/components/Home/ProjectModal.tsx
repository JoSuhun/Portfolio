import { useAtomValue, useSetAtom } from "jotai";
import { modalOpenAtom, projectTitle } from "../../stores/ProjectModalAtom";
import * as m from "../styles/ProjectModal";
import { useEffect, useRef, useState } from "react";
import projectsData from "../../assets/my_projects.json";
import { ProjectType } from "../../types/ProjectType";
import list_icon from "/img/icons/list_icon.png";
import background_icon from "/img/icons/list_gift_icon.png";
import skill_icon from "/img/icons/list_cat_icon.png";
import ProjectModalSkillItem from "./ProjectModalSkillItem";

const projects: Record<string, ProjectType> = projectsData;

const ProjectModal = () => {
  const setIsOpen = useSetAtom(modalOpenAtom);
  const title = useAtomValue(projectTitle);
  const modalRef = useRef<HTMLDivElement>(null);
  const [projectInfo, setProjectInfo] = useState<ProjectType | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [modalRef, setIsOpen]);

  useEffect(() => {
    setProjectInfo(projects[title as string]);
  }, [title]);

  return (
    <>
      <m.ModalWrapper>
        <div className="bg"></div>
        <m.ModalCard ref={modalRef}>
          <p className="title">{title}</p>
          <p className="summary">: {projectInfo?.intro.summary}</p>
          <m.ProjectInfoBox>
            <p>
              <img src={list_icon} alt="list_icon" /> 기간
            </p>
            <p>{projectInfo?.intro.date}</p>
          </m.ProjectInfoBox>
          <m.ProjectInfoBox>
            <p>
              <img src={background_icon} alt="list_icon" /> 기획 배경
            </p>
            <p>{projectInfo?.intro.background}</p>
          </m.ProjectInfoBox>
          <m.ProjectInfoBox>
            <p>
              <img src={skill_icon} alt="skill_icon" />
              FE 사용한 기술스택
            </p>
            {projectInfo?.skill.map((item) => (
              <ProjectModalSkillItem skill={item} />
            ))}
          </m.ProjectInfoBox>
          <button onClick={() => setIsOpen(false)}>dd</button>
        </m.ModalCard>
      </m.ModalWrapper>
    </>
  );
};

export default ProjectModal;
