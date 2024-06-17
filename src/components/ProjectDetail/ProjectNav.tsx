import { useAtomValue } from "jotai";
import * as n from "../styles/ProjectDetail/ProjectNav";
import {
  ProjectIntroAtom,
  ProjectReviewAtom,
  ProjectSkillAtom,
  ProjectTaskAtom,
} from "../../stores/ProjectNavAtom";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  color: string;
};

const ProjectNav = ({ title, color }: Props) => {
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
        <n.NavItem
          onClick={() =>
            ProjectIntroRef?.scrollIntoView({ behavior: "smooth" })
          }
        >
          프로젝트 개요
        </n.NavItem>
        <n.NavItem
          onClick={() =>
            ProjectSkillRef?.scrollIntoView({ behavior: "smooth" })
          }
        >
          사용한 기술 스택 [FE]
        </n.NavItem>
        <n.NavItem
          onClick={() => ProjectTaskRef?.scrollIntoView({ behavior: "smooth" })}
        >
          담당 업무
        </n.NavItem>
        <n.NavItem
          onClick={() =>
            ProjectReviewRef?.scrollIntoView({ behavior: "smooth" })
          }
        >
          회고
        </n.NavItem>
      </div>
    </n.SideNavWrapper>
  );
};

export default ProjectNav;
