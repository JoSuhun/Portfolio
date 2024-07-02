import { useRef } from "react";
import * as h from "../components/styles/Home/Home";
import { scrollToRef } from "../utils/scrollToRef";
import Info from "../components/IntroPage/Info";

const IntroPage = () => {
  const InfoRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <h.HomeBackGround>
        <div className="h-screen relative overflow-hidden home_bg">
          <div className="absolute bottom-28 flex flex-col gap-5 pl-10">
            <div
              className="font-PartialSans text-gon-orange
           2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl"
            >
              Frontend-dev
            </div>
            <div
              className="font-PartialSans text-gon-green
           2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl"
            >
              Portfolio
            </div>
            <div
              className="font-thin self-end pt-2
           2xl:text-4xl xl:text-3xl text-2xl"
            >
              안녕하세요, 조수훈입니다.
            </div>
          </div>
          <button
            className="absolute bottom-5 left-1/2"
            onClick={() => scrollToRef(InfoRef.current as HTMLDivElement)}
          >
            어서오세요 - !
          </button>
        </div>
      </h.HomeBackGround>
      <div ref={InfoRef}>
        <Info />
      </div>
    </>
  );
};

export default IntroPage;
