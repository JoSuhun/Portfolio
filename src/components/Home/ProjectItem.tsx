import * as p from "../styles/Home/ProjectItem";
import stellAR from "/img/project/StellAR_logo.png";
import NeoRo from "/img/project/NeoRo_logo.png";
import Neureka from "/img/project/Neureka_logo.png";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  date: string;
  content: string;
};

const ProjectItem = ({ title, date, content }: Props) => {
  const navigate = useNavigate();

  const cardClick = () => {
    navigate(`/project/${title}`);
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
