import { useAtomValue } from "jotai";
import * as n from "../styles/ProjectDetail/ProjectNav";
import {
  ProjectIntroAtom,
  ProjectReviewAtom,
  ProjectSkillAtom,
  ProjectTaskAtom,
} from "../../stores/ProjectNavAtom";
import { useEffect, useState } from "react";
import link_icon from "/img/icons/link-dark.png";
import ProjectNavItem from "./ProjectNavItem";

type Props = {
  title: string;
  color: string;
  github: string;
  notion: string;
};

const ProjectNav = ({ title, color, github, notion }: Props) => {
  const ProjectIntroRef = useAtomValue(ProjectIntroAtom);
  const ProjectSkillRef = useAtomValue(ProjectSkillAtom);
  const ProjectTaskRef = useAtomValue(ProjectTaskAtom);
  const ProjectReviewRef = useAtomValue(ProjectReviewAtom);

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
    <n.SideNavWrapper $color={color}>
      <div className="inner_wrapper">
        <p
          className={
            scrollPosition > 80 ? "visible project_title" : "project_title"
          }
        >
          {title}
        </p>
        <ProjectNavItem
          title="프로젝트 개요"
          sectionRef={ProjectIntroRef as HTMLDivElement}
        />
        <ProjectNavItem
          title="사용한 기술 스택"
          sectionRef={ProjectSkillRef as HTMLDivElement}
        />
        <ProjectNavItem
          title="담당 업무"
          sectionRef={ProjectTaskRef as HTMLDivElement}
        />
        <ProjectNavItem
          title="회고"
          sectionRef={ProjectReviewRef as HTMLDivElement}
        />
        <n.NavItem className="link_container">
          <div className="link_box">
            <div
              className="go_github"
              onClick={() => window.open(`${github}`, "_blank")}
            >
              github
              <img src={link_icon} />
            </div>
            <div
              className="go_notion"
              onClick={() => window.open(`${notion}`, "_blank")}
            >
              notion
              <img src={link_icon} />
            </div>
          </div>
        </n.NavItem>
      </div>
    </n.SideNavWrapper>
  );
};

export default ProjectNav;
