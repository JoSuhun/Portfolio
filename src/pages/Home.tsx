import Nav from "../components/common/Nav";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import Footer from "../components/common/Footer";
import * as h from "../components/styles/Home";
import { Suspense, lazy } from "react";
import Loading from "./Loading";

const IntroSection = lazy(() => import("../components/Home/IntroSection"));
const InfoSection = lazy(() => import("../components/Home/InfoSection"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav />
        <h.HomeBackGround className="home_bg">
          <IntroSection />
          <InfoSection />
          <SkillSection />
          <ProjectSection />
          <Footer />
        </h.HomeBackGround>
      </Suspense>
    </>
  );
};

export default Home;
