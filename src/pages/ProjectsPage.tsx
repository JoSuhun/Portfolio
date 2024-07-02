import { useEffect } from "react";
import Nav from "../components/common/Nav";
import PageHeader from "../components/common/PageHeader";
import ProjectSection from "../components/ProjectsPage/ProjectSection";
import GetInTouch from "../components/common/GetInTouch";

const ProjectsPage = () => {
  useEffect(() => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="h-screen">
        <Nav />
        <div className="p-20">
          <PageHeader title="저의 프로젝트를 소개합니다 - !" />
          <div className="mt-10">
            <ProjectSection />
          </div>
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default ProjectsPage;
