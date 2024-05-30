import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100vw;
  height: 5vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--color-red);
  font-family: Galmuri11;
`;

export const NavTitle = styled.span`
  font-size: 1.3rem;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  color: var(--color-beige);
`;

export const NavBtn = styled.span`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  transition: all 200ms ease-in-out;
  width: 3vw;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
  &:hover {
    transform: translateY(-57%);
  }
`;

export const NavContainer = styled.div`
  background-color: #00000046;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  right: 0;
  height: 100vh;
  width: 30vw;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 450ms ease-in-out;
  &.clicked {
    transform: translateY(-10%);
    opacity: 1;
  }
`;

export const NavList = styled.div`
  width: 90%;
  padding-top: 10vh;
`;

export const NavItem = styled.p`
  font-family: Galmuri11;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 5vh;
`;
