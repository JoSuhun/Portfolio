import Nav from "../components/common/Nav";
import IntroSection from "../components/Home/IntroSection";
import InfoSection from "../components/Home/InfoSection";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import Footer from "../components/common/Footer";
import * as h from "../components/styles/Home/Home";

const Home = () => {
  return (
    <>
      <Nav />
      <h.HomeBackGround className="home_bg">
        <IntroSection />
        <InfoSection />
        <SkillSection />
        <ProjectSection />
        <Footer />
      </h.HomeBackGround>
    </>
  );
};

export default Home;
