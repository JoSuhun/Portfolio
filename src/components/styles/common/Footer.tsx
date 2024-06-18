import styled from "styled-components";

export const FooterWrapper = styled.div`
  min-height: 35dvh;
  padding: 5dvh 5dvw;
  padding-top: 13dvh;
  border-top: 1px solid var(--color-red);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  @media (max-width: 600px) {
    height: 15vh;
  }
  .contact {
    position: relative;
    margin-top: 3%;
    background-color: var(--card-background);
    border-radius: 20px;
  }
`;

export const InfoBoxContainer = styled.div`
  /* height: 40px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7dvh 5% 5dvh 5%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const InfoBox = styled.div`
  position: relative;
  cursor: pointer;
  font-family: Pretendard-Light;
  color: white;
  background-color: var(--color-grey);
  box-shadow: var(--card-shadow);
  border-radius: 20px;
  padding: 5px 10px;
  display: flex;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
  transform: translateY(0%);
  &:hover {
    background-color: black;
    transform: translateY(-3%);
  }

  &.gmail {
    padding: 7px 10px;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin-bottom: 10px;
  }

  .tooltip {
    font-family: DOSSaemmul;
    position: absolute;
    min-width: max-content;
    z-index: 100;
    bottom: -120%;
    color: #ffffff;
    letter-spacing: 1px;
    font-size: 0.9rem;
    background-color: var(--color-grey);
    padding: 5px 10px;
    border-radius: 5px;
    display: none;
    &::after {
      content: "";
      position: absolute;
      top: -13px;
      left: 35%;
      transform: translateX(-30%);
      transform-origin: center;
      border: 7px solid transparent;
      border-top-color: var(--color-grey);
      rotate: -180deg;
    }
  }

  &:hover .tooltip {
    display: block;
  }

  img {
    height: 25px;
    margin-left: 10px;
  }
`;

export const Comment = styled.div`
  font-family: Galmuri11;
  font-size: 2rem;
  text-align: end;
  margin-top: 10dvh;
  &.top {
    font-size: 1.3rem;
    text-align: start;
    margin-bottom: 5dvh;
    padding: 10px 20px;
    border-radius: 20px;
    margin-top: unset;
    font-family: Galmuri11-Bold;
    background-color: white;
    position: absolute;
    top: -30px;
    left: -20px;
    /* box-shadow: 3px 3px var(--color-green); */
  }
  span {
    color: var(--color-red);
  }
  @media (max-width: 992px) {
    font-size: 1.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin: 30px 0;
  }
`;
