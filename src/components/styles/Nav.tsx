import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100vw;
  height: 35px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--color-red);
  font-family: Galmuri11;
  @media (max-width: 600px) {
    height: 25px;
  }
`;

export const NavBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2%;
  width: 300px;
  @media (max-width: 600px) {
    width: 220px;
  }
`;

export const NavBtn = styled.div`
  cursor: pointer;
  font-family: Galmuri11-Bold;

  &:hover {
    transform: translateY(-3%);
  }
  &.focused {
    color: #ececec;
    text-shadow: 2px 2px var(--color-grey);
    background-color: var(--color-green);
    padding: 0 3%;
    border-radius: 50px;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
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
