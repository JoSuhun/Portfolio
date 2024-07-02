import { useEffect } from "react";
import SkillSection from "../components/SkillsPage/SkillSection";
import Nav from "../components/common/Nav";
import PageHeader from "../components/common/PageHeader";
import GetInTouch from "../components/common/GetInTouch";

const SkillsPage = () => {
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
        <div className="pt-24 p-20">
          <PageHeader title="이러한 기술을 활용할 수 있습니다." />
          <SkillSection />
        </div>
      </div>
      <GetInTouch />
    </>
  );
};

export default SkillsPage;
