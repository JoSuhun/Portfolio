import * as h from "../styles/Home";
// import { useAtom } from "jotai";
// import { modalOpenAtom } from "../../stores/ProjectModalAtom";
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
      <h.ProjectItem onClick={cardClick}>
        <h.ProjectThumbnail>
          <img
            src={
              title == "stellAR"
                ? stellAR
                : title == "너에게, 로그인"
                ? NeoRo
                : Neureka
            }
          />
        </h.ProjectThumbnail>
        <h.ProjectContent>
          <p className="project_title">{title}</p>
          <p>{date}</p>
          <p>{content}</p>
        </h.ProjectContent>
      </h.ProjectItem>
    </>
  );
};

export default ProjectItem;
