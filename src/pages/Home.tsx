import Nav from "../components/common/Nav";
import InfoSection from "../components/Home/InfoSection";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import Footer from "../components/common/Footer";
import * as h from "../components/styles/Home";
import { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./Loading";

const IntroSection = lazy(() => import("../components/Home/IntroSection"));
// const InfoSection = lazy(() => import("../components/Home/InfoSection"));

const Home = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Suspense fallback={<Loading progress={progress} />}>
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
