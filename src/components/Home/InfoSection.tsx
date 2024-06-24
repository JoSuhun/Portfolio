import { useEffect, useState } from "react";
import * as h from "../styles/Home/Home";
import * as i from "../styles/Home/InfoSection";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import PokemonGlbModel from "./PokemonGlbModel";
import BeachBallModel from "./BeachBallModel";

const InfoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pikaClicked, setPikaClicked] = useState(true);

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
      <i.InfoContainer>
        <i.InfoLeftSection className="pokemon_section">
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
          </Canvas>
        </i.InfoLeftSection>

        <i.InfoMidSection className={scrollPosition > 70 ? "focused" : ""}>
          <i.InfoTitle>학력 / 경력</i.InfoTitle>
          <i.InfoBox>
            <i.InfoDate>2016. 03. ~ 2021. 02.</i.InfoDate>
            <i.InfoContent>전남대학교 행정학과 졸업</i.InfoContent>
          </i.InfoBox>
          <i.InfoBox>
            <i.InfoDate>2021. 01. ~ 2022. 07.</i.InfoDate>
            <i.InfoContent>
              광주광역시교육청 지방교육행정서기보 (행정9급)
            </i.InfoContent>
          </i.InfoBox>
          <i.InfoTitle>교육 사항</i.InfoTitle>
          <i.InfoBox className="ssafy">
            <i.InfoDate>2023. 07. ~ 2024. 06.</i.InfoDate>
            <i.InfoContent>삼성 청년 소프트웨어 아카데미 (SSAFY)</i.InfoContent>
          </i.InfoBox>
          <i.InfoTitle>어학 / 자격증</i.InfoTitle>
          <i.InfoBox>
            <i.InfoDate>2023. 06.</i.InfoDate>
            <i.InfoContent>Toeic Speaking IH (140)</i.InfoContent>
            <i.InfoDate>2024. 04.</i.InfoDate>
            <i.InfoContent>SQL 개발자 (SQLD)</i.InfoContent>
          </i.InfoBox>
        </i.InfoMidSection>
      </i.InfoContainer>
    </h.Wrapper>
  );
};

export default InfoSection;
