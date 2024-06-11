import { useEffect, useState } from "react";
import * as h from "../styles/Home";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sparkles } from "@react-three/drei";
import PokemonGlbModel from "./PokemonGlbModel";
import BeachBallModel from "./BeachBallModel";

const InfoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pikaClicked, setPikaClicked] = useState(false);

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
    <h.Wrapper>
      <h.InfoContainer>
        <h.InfoLeftSection className="pokemon_section">
          <Canvas
            style={{ overflow: "visible" }}
            gl={{ antialias: true }}
            dpr={[1, 2]}
            shadows={"soft"}
            camera={{
              fov: 60,
              near: 0.1,
              far: 100,
              position: [-3, 7, 8],
            }}
          >
            <OrbitControls enableZoom={false} enableRotate={false} />
            <directionalLight
              intensity={1}
              position={[3, 5, 10]}
              color={"yellow"}
            />
            <directionalLight intensity={1} position={[-10, 7, 10]} />
            <directionalLight
              intensity={0.7}
              position={[10, 10, 10]}
              castShadow
            />

            <Html zIndexRange={[1, 1]}>
              {!pikaClicked ? (
                <div className="pika_tooltip">우리 춤 출까요?</div>
              ) : (
                <div className="pika_tooltip">Feel the beat!</div>
              )}
            </Html>

            <BeachBallModel />

            <PokemonGlbModel
              pikaClicked={pikaClicked}
              setPikaClicked={setPikaClicked}
            />
            <Sparkles
              count={20}
              scale={10}
              size={10}
              color={"#feffcd"}
              position={[0, 0, 2]}
              speed={2.5}
              noise={1}
            />
          </Canvas>
        </h.InfoLeftSection>

        <h.InfoMidSection className={scrollPosition > 70 ? "focused" : ""}>
          <h.InfoTitle>학력 / 경력</h.InfoTitle>
          <h.InfoBox>
            <h.InfoDate>2016. 03. ~ 2021. 02.</h.InfoDate>
            <h.InfoContent>전남대학교 행정학과 졸업</h.InfoContent>
          </h.InfoBox>
          <h.InfoBox>
            <h.InfoDate>2021. 01. ~ 2022. 07.</h.InfoDate>
            <h.InfoContent>
              광주광역시교육청 지방교육행정서기보 (행정9급)
            </h.InfoContent>
          </h.InfoBox>
          <h.InfoTitle>교육 사항</h.InfoTitle>
          <h.InfoBox className="ssafy">
            <h.InfoDate>2023. 07. ~ 2024. 06.</h.InfoDate>
            <h.InfoContent>삼성 청년 소프트웨어 아카데미 (SSAFY)</h.InfoContent>
          </h.InfoBox>
          <h.InfoTitle>어학 / 자격증</h.InfoTitle>
          <h.InfoBox>
            <h.InfoDate>2023. 06.</h.InfoDate>
            <h.InfoContent>Toeic Speaking IH (140)</h.InfoContent>
            <h.InfoDate>2024. 04.</h.InfoDate>
            <h.InfoContent>SQL 개발자 (SQLD)</h.InfoContent>
          </h.InfoBox>
        </h.InfoMidSection>
      </h.InfoContainer>
    </h.Wrapper>
  );
};

export default InfoSection;
