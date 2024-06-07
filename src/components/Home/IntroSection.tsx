import * as h from "../styles/Home";
import { Canvas } from "@react-three/fiber";
import TomatoGlbModel from "./TomatoGlbModel";
import { OrbitControls } from "@react-three/drei";

const IntroSection = () => {
  return (
    <h.Wrapper>
      <h.IntroContainer>
        <section>
          <p className="typing">안녕하세요,</p>
          <div className="title">
            Front-end Developer
            <p>생각이 많은 개발자 조수훈입니다.</p>
            <p className="title-expand">
              <span>'지식'만 많은 사람</span>보다,{" "}
              <span>'생각'도 많은 사람</span>이 되고 싶습니다.
            </p>
          </div>

          <div className="content">
            <p>
              <span>효율적</span>이고 <span>재사용이 가능한</span> 코드를
              작성합니다.
            </p>
            <p>
              <span>사용자 경험</span>과 사용자 입장의 UI/UX를 중시합니다.
            </p>
            <p>
              <span>긍정적인 관계</span>에서 나오는 <span>팀워크</span>의 힘을
              중요하게 생각합니다.
            </p>
          </div>
        </section>

        <section>
          <h.GlbWrapper>
            <Canvas
              gl={{ antialias: true }}
              shadows={"soft"}
              camera={{
                fov: 60,
                // aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 100,
                position: [5, 5, 8],
              }}
            >
              <OrbitControls enableZoom={false} />
              <directionalLight intensity={1} position={[-1, 2, 2]} />
              <directionalLight intensity={0.7} position={[200, -10, 2]} />
              <directionalLight intensity={1} position={[-100, 0, -100]} />
              <TomatoGlbModel />
            </Canvas>
          </h.GlbWrapper>
        </section>
      </h.IntroContainer>
    </h.Wrapper>
  );
};

export default IntroSection;
