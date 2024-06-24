import styled from "styled-components";

// InfoSection

export const InfoContainer = styled.div`
  width: 100%;
  overflow: visible;
  display: flex;
  justify-content: space-around;
  transform: translateX(0);
  transition: all 500ms ease-in-out;

  &.clicked {
    transform: translateX(-22%);
    .glb_section {
      /* opacity: 0; */
    }
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoLeftSection = styled.section`
  width: 30%;
  position: relative;
  overflow: visible;
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 786px) {
    width: 100%;
    height: 50dvh;
  }
  @media (max-width: 600px) {
    /* height: 80%; */
  }
  div {
    overflow: visible;
  }
  .pika_tooltip {
    font-family: DOSSaemmul;
    position: absolute;
    min-width: max-content;
    z-index: 100;
    top: -230px;
    color: #ffffff;
    letter-spacing: 1px;
    font-size: 1rem;
    background-color: #41414a;
    padding: 5px 10px;
    border-radius: 5px;
    &::after {
      content: "";
      position: absolute;
      bottom: -13px;
      left: 10%;
      border: 7px solid transparent;
      border-top-color: #41414a;
      rotate: 0deg;
    }
    @media (max-width: 600px) {
      font-size: 0.8rem;
      top: -220px;
    }
  }
`;

export const InfoMidSection = styled.section`
  /* width: 50vw; */
  margin-right: 20px;
  transform: translateX(200%);
  transition: all 900ms ease-in-out;
  opacity: 0;
  &.focused {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const InfoBox = styled.div`
  /* border: 1px solid yellow; */
  /* margin: 20px 0; */
  margin-bottom: 20px;
  padding: 20px;

  display: grid;
  grid-template-columns: 0.7fr 1fr;
  font-family: Galmuri11;

  border-radius: 30px;
  background: var(--card-background);
  box-shadow: var(--card-shadow);
  :nth-child(3) {
    padding-top: 15px;
  }
  :nth-child(4) {
    padding-top: 15px;
  }
  /* cursor: pointer; */
  transform: translateY(0%);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translateY(-5%);
  }
  @media (max-width: 1200px) {
    margin-bottom: 15px;
    padding: 15px;
    grid-template-columns: 0.5fr 1fr;

    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 12px;
    padding: 12px;
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 786px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const InfoTitle = styled.p`
  /* background-color: red; */
  margin-left: 5px;
  margin-bottom: 5px;
  font-family: Galmuri11-Bold;
  @media (max-width: 786px) {
    font-size: 0.9rem;
  }
`;

export const InfoDate = styled.p``;

export const InfoContent = styled.p`
  font-size: 1.1rem;
  display: flex;
  position: relative;
`;
