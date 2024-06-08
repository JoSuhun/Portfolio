import { useAtomValue, useSetAtom } from "jotai";
import { modalOpenAtom, projectTitle } from "../../stores/ProjectModalAtom";
import * as m from "../styles/ProjectModal";
import { useEffect, useRef, useState } from "react";
import projectsData from "../../assets/my_projects.json";
import { ProjectType } from "../../types/ProjectType";
import github_icon from "/img/icons/github.svg";
import notion_icon from "/img/icons/notion.png";
import list_icon from "/img/icons/list_icon.png";
import background_icon from "/img/icons/list_gift_icon.png";
import skill_icon from "/img/icons/list_cat_icon.png";
import task_icon from "/img/icons/list_smile_icon.png";

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
          <div className="title">
            {title}
            <m.Link>
              <div className="go_github">
                <span>Go Github</span>
                <a href={projectInfo?.link.github}>
                  <img src={github_icon} alt="go_github" />
                </a>
              </div>
              <div className="go_notion">
                <span>Go Notion</span>

                <a href={projectInfo?.link.notion}>
                  <img src={notion_icon} alt="go_notion" />
                </a>
              </div>
            </m.Link>
          </div>
          <p className="summary">: {projectInfo?.intro.summary}</p>
          <m.ProjectInfoBox>
            <m.InfoTitle>
              <img src={list_icon} alt="list_icon" /> 기간
            </m.InfoTitle>
            <p>{projectInfo?.intro.date}</p>
          </m.ProjectInfoBox>
          <m.ProjectInfoBox>
            <m.InfoTitle>
              <img src={background_icon} alt="list_icon" /> 기획 배경
            </m.InfoTitle>
            <p>{projectInfo?.intro.background}</p>
          </m.ProjectInfoBox>
          <m.ProjectInfoBox>
            <m.InfoTitle>
              <img src={skill_icon} alt="skill_icon" />
              FE 사용한 기술스택
            </m.InfoTitle>
            {projectInfo?.skill.map((item, idx) => (
              <m.ProjectSkillItem key={idx}>{item}</m.ProjectSkillItem>
            ))}
          </m.ProjectInfoBox>

          <m.ProjectImage>
            {projectInfo?.image.map((item, idx) => (
              <img key={idx} src={item} alt="" />
            ))}
          </m.ProjectImage>

          <m.ProjectInfoBox>
            <m.InfoTitle>
              <img src={task_icon} alt="list_icon" />
              담당 업무
            </m.InfoTitle>
            {projectInfo?.task.map((item, idx) =>
              item.length > 1 ? (
                <div key={idx}>
                  <m.TaskItem> • {item[0]}</m.TaskItem>
                  {item.slice(1, item.length).map((i, idx) => (
                    <m.TaskItem key={idx} className="list_child">
                      {i}
                    </m.TaskItem>
                  ))}
                </div>
              ) : (
                <m.TaskItem key={idx}>• {item}</m.TaskItem>
              )
            )}
          </m.ProjectInfoBox>
        </m.ModalCard>
      </m.ModalWrapper>
    </>
  );
};

export default ProjectModal;
