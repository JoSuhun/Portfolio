import { ProjectType } from "../../types/ProjectType";
import * as c from "../styles/ProjectDetail/ProjectContent";
import cat_icon from "/img/icons/list_cat_icon.png";
import gift_icon from "/img/icons/list_gift_icon.png";
import smile_icon from "/img/icons/list_smile_icon.png";
import list_icon from "/img/icons/list_icon.png";
import { useSetAtom } from "jotai";
import {
  ProjectIntroAtom,
  ProjectReviewAtom,
  ProjectSkillAtom,
  ProjectTaskAtom,
} from "../../stores/ProjectNavAtom";
import { useEffect, useRef } from "react";

type Props = {
  projectInfo: ProjectType;
};

const ProjectContent = ({ projectInfo }: Props) => {
  const SetProjectIntroRef = useSetAtom(ProjectIntroAtom);
  const SetProjectSkillRef = useSetAtom(ProjectSkillAtom);
  const SetProjectTaskRef = useSetAtom(ProjectTaskAtom);
  const SetProjectReviewRef = useSetAtom(ProjectReviewAtom);
  const IntroRef = useRef<HTMLDivElement | null>(null);
  const SkillRef = useRef<HTMLDivElement | null>(null);
  const TaskRef = useRef<HTMLDivElement | null>(null);
  const ReviewRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (IntroRef.current) {
      SetProjectIntroRef(IntroRef.current);
    }
  }, [IntroRef, SetProjectIntroRef]);
  useEffect(() => {
    if (SkillRef.current) {
      SetProjectSkillRef(SkillRef.current);
    }
  }, [SkillRef, SetProjectSkillRef]);
  useEffect(() => {
    if (TaskRef.current) {
      SetProjectTaskRef(TaskRef.current);
    }
  }, [TaskRef, SetProjectTaskRef]);
  useEffect(() => {
    if (ReviewRef.current) {
      SetProjectReviewRef(ReviewRef.current);
    }
  }, [ReviewRef, SetProjectReviewRef]);

  return (
    <c.ContentWrapper>
      {/* <div className="title">
        <span>{projectInfo?.title}</span> - {projectInfo?.intro.summary}
      </div> */}

      <div ref={IntroRef}>
        <c.ListTitle>
          <c.ListIcon src={cat_icon} />
          프로젝트 개요
        </c.ListTitle>
        <c.InnerWrapper>
          <p>• 진행 기간 : {projectInfo?.intro.date}</p>
          <p>• 기획 배경 : {projectInfo?.intro.background}</p>
        </c.InnerWrapper>
      </div>

      <div ref={SkillRef}>
        <c.ListTitle>
          <c.ListIcon src={gift_icon} />
          사용한 기술 스택 [FE]
        </c.ListTitle>
        <c.InnerWrapper>
          <div className="skill_box">
            {projectInfo?.skill.map((i, idx) => (
              <span className="skill_item" key={idx}>
                {i}
              </span>
            ))}
          </div>
        </c.InnerWrapper>
      </div>

      <div ref={TaskRef}>
        <c.ListTitle>
          <c.ListIcon src={smile_icon} />
          담당 업무
        </c.ListTitle>
        <div className="img_box">
          {projectInfo?.image.map((item, idx) => (
            <img key={idx} src={item} />
          ))}
        </div>
        <c.InnerWrapper>
          <div className="task_box">
            {projectInfo?.task.map((item, idx) =>
              item.length > 1 ? (
                <div key={idx}>
                  <p> • {item[0]}</p>
                  {item.slice(1, item.length).map((i, idx) => (
                    <p key={idx} className="list_child">
                      - {i}
                    </p>
                  ))}
                </div>
              ) : (
                <div key={idx}>
                  <p>• {item}</p>
                </div>
              )
            )}
          </div>
        </c.InnerWrapper>
      </div>

      <div ref={ReviewRef}>
        <c.ListTitle>
          <c.ListIcon src={list_icon} />
          회고
        </c.ListTitle>
        <c.InnerWrapper>...</c.InnerWrapper>
      </div>
    </c.ContentWrapper>
  );
};

export default ProjectContent;
