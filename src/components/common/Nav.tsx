import { useEffect, useState } from "react";
import * as n from "../styles/common/Nav";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const getNavBtnClass = (path: string) => {
    return location.pathname === path ? "bg-gon-orange focused" : "";
  };

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
      <n.NavWrapper className={scrollPosition > 500 ? "scroll_down" : ""}>
        <n.NavBtnBox>
          <n.NavBtn
            className={`${getNavBtnClass("/")}`}
            onClick={() => navigate("/")}
          >
            Home
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
            className={`${getNavBtnClass("/skills")}`}
            onClick={() => navigate("/skills")}
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
            className={`${getNavBtnClass("/projects")}`}
            onClick={() => navigate("/projects")}
          >
            Projects
          </n.NavBtn>
        </n.NavBtnBox>
      </n.NavWrapper>
    </>
  );
};

export default Nav;
