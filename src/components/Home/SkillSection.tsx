import * as h from "../styles/Home/Home";
import * as s from "../styles/Home/SkillSection";
import html_img from "/img/skills/html.png";
import css_img from "/img/skills/css.png";
import python_img from "/img/skills/python.png";
import js_img from "/img/skills/js.png";
import ts_img from "/img/skills/ts.png";
import react_img from "/img/skills/react.png";
import threejs_img from "/img/skills/three.png";
import django_img from "/img/skills/django.png";
import vue_img from "/img/skills/vue.png";
import nextjs_img from "/img/skills/next.png";
import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { SkillsAtom } from "../../stores/NavAtom";

const SkillSection = () => {
  const SetSkillRef = useSetAtom(SkillsAtom);
  const Ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (Ref.current) {
      SetSkillRef(Ref.current);
    }
  }, [Ref, SetSkillRef]);

  const [scrollPosition, setScrollPosition] = useState(0);

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
    <h.Wrapper ref={Ref}>
      <div className={scrollPosition > 800 ? "header focused" : "header"}>
        <p className="typing">Skills,</p>
        <div className="title">이러한 기술을 갖추고 있어요.</div>
      </div>
      <s.SkillContainer>
        {/* competent */}
        <s.SkillBox className="competent" point="#ffdf7f">
          <s.Additional className="ex competent_ex">
            6주 이상의 프로젝트에서 활용한 경험이 있습니다.
          </s.Additional>
          <s.SkillLevel className="level">
            다양하게 활용할 수 있는,
          </s.SkillLevel>
          <s.SkillItem>
            <img src={html_img} />
            <img src={css_img} />
            <div>
              <p className="skill_text">HTML, CSS</p>
              <p>클라이언트 화면을 자유롭게 구성할 수 있습니다.</p>
            </div>
          </s.SkillItem>
          <s.SkillItem>
            <img src={js_img} />
            <img src={ts_img} />
            <div>
              <p className="skill_text">JavaScript / TypeScript</p>
              <p>
                논리적인 코드를 작성하고, 내장 매서드를 잘 사용할 수 있습니다.
              </p>
            </div>
          </s.SkillItem>
          <s.SkillItem>
            <img src={python_img} />
            <div>
              <p className="skill_text">Python</p>
              <p>
                논리적인 코드를 작성하고, 내장 매서드를 잘 사용할 수 있습니다.
              </p>
            </div>
          </s.SkillItem>
          <s.SkillItem>
            <img src={react_img} />
            <div>
              <p className="skill_text">React</p>
              <p>자유롭게 페이지와 컴포넌트를 구현할 수 있습니다.</p>
              <p>React query를 활용하여 api를 효율적으로 호출할 수 있습니다.</p>
            </div>
          </s.SkillItem>
          <s.SkillItem>
            <img src={threejs_img} />
            <div>
              <p className="skill_text">Three.js</p>
              <p>웹에서 3D 에셋을 랜더링하고, 이벤트를 구현할 수 있습니다.</p>
            </div>
          </s.SkillItem>
        </s.SkillBox>

        {/* advanced */}
        <s.SkillBox className="advanced" point="#fde69e">
          <s.Additional className="ex advanced_ex">
            1-2주의 소규모 프로젝트에서 활용한 경험이 있습니다.
          </s.Additional>
          <s.SkillLevel className="level">
            어느정도 활용할 수 있는,
          </s.SkillLevel>
          <s.SkillItem>
            <img src={django_img} />
            <div>
              <p className="skill_text">Django</p>
              <p>
                model과 serializer을 이해하고, Rest api를 작성할 수 있습니다.
              </p>
            </div>
          </s.SkillItem>
          <s.SkillItem>
            <img src={vue_img} />
            <div>
              <p className="skill_text">Vue.js</p>
              <p>
                SPA 랜더링을 이해하고, lifecycle hook을 활용하여 웹페이지와
                컴포넌트를 구현할 수 있습니다.
              </p>
            </div>
          </s.SkillItem>
        </s.SkillBox>

        {/* beginner */}
        <s.SkillBox className="beginner" point="#ffeebc">
          <s.Additional className="ex beginner_ex">
            차후 프로젝트에 활용하기 위해 학습하였습니다.
          </s.Additional>
          <s.SkillLevel className="level">
            공식문서를 참고하며 활용할 수 있는,
          </s.SkillLevel>
          <s.SkillItem>
            <img src={nextjs_img} />
            <div>
              <p className="skill_text">Next.js</p>
              <p>
                SSR 방식의 랜더링을 이해하고, 병렬적으로 Data Fetching을 할 수
                있습니다.
              </p>
            </div>
          </s.SkillItem>
        </s.SkillBox>
      </s.SkillContainer>
    </h.Wrapper>
  );
};

export default SkillSection;
