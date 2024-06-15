import * as p from "../styles/ProjectItem";
import stellAR from "/img/project/StellAR_logo.png";
import NeoRo from "/img/project/NeoRo_logo.png";
import Neureka from "/img/project/Neureka_logo.png";
import { useAtom, useSetAtom } from "jotai";
import { modalOpenAtom, projectTitle } from "../../stores/ProjectModalAtom";

type Props = {
  title: string;
  date: string;
  content: string;
};

const ProjectItem = ({ title, date, content }: Props) => {
  const [isOpen, setIsOpen] = useAtom(modalOpenAtom);
  const setProjectTitle = useSetAtom(projectTitle);

  const cardClick = () => {
    setIsOpen(!isOpen);
    setProjectTitle(title);
  };

  return (
    <>
      <p.ProjectItem onClick={cardClick}>
        <p.ProjectThumbnail>
          <img
            src={
              title == "stellAR"
                ? stellAR
                : title == "너에게, 로그인"
                ? NeoRo
                : Neureka
            }
          />
        </p.ProjectThumbnail>
        <p.ProjectContent>
          <p className="project_title">{title}</p>
          <p>{date}</p>
          <p>{content}</p>
        </p.ProjectContent>
      </p.ProjectItem>
    </>
  );
};

export default ProjectItem;
