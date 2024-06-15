import styled from "styled-components";

// GlbSection
export const GlbWrapper = styled.div`
  height: 500px;
  width: 35vw;
  background-color: transparent;
  overflow: visible;
  position: relative;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 1300px) {
    height: 450px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 992px) {
    height: 350px;
  }
  @media (max-width: 900px) {
    height: 300px;
    width: 30vw;
  }
  @media (max-width: 768px) {
    height: 250px;
  }
  .tomato_ex {
    color: black;
    min-width: max-content;
    font-size: 1.1rem;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 300ms ease-in-out;
    &.hovered {
      opacity: 1;
      bottom: 7%;
    }
  }
`;

// IntroSection
export const IntroContainer = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: space-between;
  position: relative;

  .content {
    padding-top: 70px;
    font-family: Pretendard-Light;
    p {
      font-size: 1.5rem;
      padding-bottom: 7px;
      white-space: nowrap;
    }
    span {
      background: linear-gradient(
        to top,
        rgba(255, 236, 69, 0.274) 40%,
        transparent 40%
      );
    }
  }
  @media (max-width: 1400px) {
    &.intro_container {
    }
    .content {
      padding-top: 60px;
      p {
        font-size: 1.2rem;
        padding-bottom: 7px;
      }
    }
  }
  @media (max-width: 992px) {
    padding-top: 13vh;
    .content {
      padding-top: 50px;
      p {
        font-size: 1.1rem;
      }
    }
  }
  @media (max-width: 900px) {
    &.intro_container {
    }
    .content {
      padding-top: 50px;
      p {
        font-size: 1rem;
        padding-bottom: 6px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-top: 5vh;
    &.intro_container {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      :nth-child(1) {
        order: 2;
        width: 100%;
      }
      :nth-child(2) {
        order: 1;
      }
    }
    .content {
      padding-top: 30px;
      p {
        font-size: 0.9rem;
      }
    }
  }
`;
