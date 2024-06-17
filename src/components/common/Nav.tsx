import { useEffect, useState } from "react";
import * as n from "../styles/common/Nav";
import { useAtomValue } from "jotai";
import { IntroAtom, ProjectsAtom, SkillsAtom } from "../../stores/NavAtom";
import { scrollToRef } from "../../utils/scrollToRef";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const IntroRef = useAtomValue(IntroAtom);
  const SkillsRef = useAtomValue(SkillsAtom);
  const ProjectsRef = useAtomValue(ProjectsAtom);

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
    <>
      <n.NavWrapper className={scrollPosition > 100 ? "scroll_down" : ""}>
        <n.NavBtnBox>
          <n.NavBtn
            className={scrollPosition < 1000 ? "focused" : ""}
            onClick={() => IntroRef?.scrollIntoView({ behavior: "smooth" })}
          >
            안녕하세요?
          </n.NavBtn>
          <svg
            className="line"
            width="70"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1" y1="0" x2="70" y2="0" stroke="black" strokeWidth="2" />
          </svg>
          <n.NavBtn
            className={
              scrollPosition >= 1000 && scrollPosition < 1800 ? "focused" : ""
            }
            onClick={() => scrollToRef(SkillsRef as HTMLDivElement)}
          >
            Skills
          </n.NavBtn>
          <svg
            className="line"
            width="70"
            height="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1" y1="0" x2="70" y2="0" stroke="black" strokeWidth="2" />
          </svg>
          <n.NavBtn
            className={scrollPosition >= 1800 ? "focused" : ""}
            onClick={() => scrollToRef(ProjectsRef as HTMLDivElement)}
          >
            Projects
          </n.NavBtn>
        </n.NavBtnBox>
      </n.NavWrapper>
    </>
  );
};

export default Nav;
