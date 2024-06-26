import * as h from "../styles/Home/Home";
import * as i from "../styles/Home/IntroSection";
import { useSetAtom } from "jotai";
import { IntroAtom } from "../../stores/NavAtom";
import { useEffect, useRef } from "react";
import profile from "/img/profile.png";

const IntroSection = () => {
  const SetIntroRef = useSetAtom(IntroAtom);
  const Ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (Ref.current) {
      SetIntroRef(Ref.current);
    }
  }, [Ref, SetIntroRef]);

  return (
    <h.Wrapper className="intro_wrapper" ref={Ref}>
      <i.IntroContainer className="intro_container">
        <section className="left_section">
          <div className="left_box">
            <p className="typing">안녕하세요,</p>
            <div className="title">
              Front-end Developer
              <p>생각이 많은 개발자 조수훈입니다.</p>
              <div className="title-expand">
                <p>
                  <span>'지식'만 많은 사람</span>보다,{" "}
                </p>
                <p>
                  <span>'생각'도 많은 사람</span>이 되고 싶습니다.
                </p>
              </div>
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
          </div>
        </section>

        <section className="right_section">
          <div className="right_box">
            <img src={profile} />
          </div>
        </section>
      </i.IntroContainer>
    </h.Wrapper>
  );
};

export default IntroSection;
