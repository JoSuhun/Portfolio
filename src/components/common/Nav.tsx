import { useState } from "react";
import * as n from "../styles/Nav";
import navbtn from "/img/nav-btn.png";

const Nav = () => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <n.NavWrapper>
        {/* <n.NavTitle>어서오세요, </n.NavTitle> */}
        <n.NavBtn onClick={() => setNavClicked(!navClicked)}>
          <img src={navbtn} alt="nav_btn" />
        </n.NavBtn>
      </n.NavWrapper>
      <n.NavContainer className={navClicked ? "clicked" : ""}>
        <n.NavList>
          <n.NavItem>
            안녕하세요,
            <br />
            처음뵙겠습니다 - !
          </n.NavItem>
          <n.NavItem>이러한 기술을 갖추고 있어요.</n.NavItem>
          <n.NavItem>저의 프로젝트를 소개합니다.</n.NavItem>
        </n.NavList>
      </n.NavContainer>
    </>
  );
};

export default Nav;
