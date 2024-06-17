import styled from "styled-components";

export const NavWrapper = styled.div`
  height: 4.5dvh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-red);
  border-radius: 15px;
  font-family: Galmuri11;
  box-shadow: 3px 3px #0000001c;
  @media (max-width: 600px) {
    height: 30px;
  }
  &.scroll_down {
    background-color: #ffffffd6;
    .line {
      line {
        stroke: var(--color-red);
      }
    }
  }
`;

export const NavBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  @media (max-width: 600px) {
    width: 300px;
  }
  .line {
    padding: 0 5px;
    line {
      stroke: white;
    }
  }
`;

export const NavBtn = styled.div`
  cursor: pointer;
  font-family: Galmuri11-Bold;
  /* color: #f9f9f9; */
  font-size: 1.2rem;
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
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
