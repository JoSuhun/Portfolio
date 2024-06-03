import React, { useEffect, useState } from "react";
import * as h from "../styles/Home";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import PokemonGlbModel from "./PokemonGlbModel";

const InfoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", updateScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <h.Wrapper>
      <h.InfoContainer>
        <hr className={scrollPosition > 40 ? "line" : ""} />

        <h.InfoLeftSection className="glb_section">
          {" "}
          <h.GlbWrapper>
            <Canvas
              gl={{ antialias: true }}
              dpr={[1, 2]}
              shadows={"soft"}
              camera={{
                fov: 60,
                // aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 100,
                position: [-3, 3, 10],
              }}
            >
              <OrbitControls />
              <directionalLight
                intensity={1}
                position={[3, 5, 10]}
                color={"yellow"}
              />
              <directionalLight intensity={0.7} position={[-10, 7, 10]} />
              <directionalLight
                intensity={0.7}
                position={[10, 10, 10]}
                castShadow
              />

              <mesh
                receiveShadow
                castShadow={false}
                rotation-x={-Math.PI / 2}
                position={[0, -10, -1]}
              >
                <sphereGeometry args={[6.8, 100, 100]} />
                <meshStandardMaterial opacity={0.5} color={"lightgreen"} />
              </mesh>

              <PokemonGlbModel />
              <Sparkles
                count={20}
                scale={12}
                size={10}
                color={"pink"}
                position={[0, 0, 0]}
                speed={2.5}
                noise={1}
              />
            </Canvas>
          </h.GlbWrapper>
        </h.InfoLeftSection>

        <h.InfoMidSection>
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
          <h.InfoBox>
            <h.InfoDate>2023. 07. ~ 2024. 06.</h.InfoDate>
            <h.InfoContent>삼성 청년 소프트웨어 아카데미 (SSAFY)</h.InfoContent>
          </h.InfoBox>
          <h.InfoBox>
            <h.InfoDate>2023. 06.</h.InfoDate>
            <h.InfoContent>Toeic Speaking IH (140)</h.InfoContent>
            <h.InfoDate>2023. 04.</h.InfoDate>
            <h.InfoContent>SQL 개발자 (SQLD)</h.InfoContent>
          </h.InfoBox>
        </h.InfoMidSection>
      </h.InfoContainer>
    </h.Wrapper>
  );
};

export default InfoSection;
