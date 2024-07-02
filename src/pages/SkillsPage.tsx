import { useEffect } from "react";
import SkillSection from "../components/Home/SkillSection";
import Nav from "../components/common/Nav";
import PageHeader from "../components/common/PageHeader";

const SkillsPage = () => {
  useEffect(() => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Nav />
      <div className="p-20">
        <PageHeader title="이러한 기술을 활용할 수 있습니다 - !" />
        <SkillSection />
      </div>
    </>
  );
};

export default SkillsPage;
