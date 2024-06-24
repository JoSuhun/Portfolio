import { Suspense, lazy, useEffect, useState } from "react";
import Nav from "../components/common/Nav";
import InfoSection from "../components/Home/InfoSection";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import Footer from "../components/common/Footer";
import * as h from "../components/styles/Home/Home";
import Loading from "../components/common/Loading";

const IntroSection = lazy(() => import("../components/Home/IntroSection"));

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev < 90 ? prev + 10 : prev >= 90 && prev < 99 ? prev + 3 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 99) {
      setIsInitialLoad(false);
    }
  }, [progress]);

  return (
    <>
      {isInitialLoad && <Loading progress={progress} />}
      {!isInitialLoad && (
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
      )}
    </>
  );
};

export default Home;
