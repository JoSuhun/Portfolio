import styled from "styled-components";

export const HomeBackGround = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  &.home_bg {
    &::before {
      position: absolute;
      content: "";
      width: 600%;
      height: 600%;
      transform: rotate(-45deg);
      background-image: radial-gradient(#fefff6 50px, transparent 0);
      background-size: 250px 250px;
      background-position: center center;
      transform-origin: center center;
      top: -3000px;
      left: 1300px;
      z-index: -3;
    }
  }
  @media (max-width: 992px) {
    &.home_bg {
      &::before {
        top: -2500px;
        left: 2500px;
        z-index: -3;
      }
    }
  }

  @media (max-width: 870px) {
    &.home_bg {
      &::before {
        background-image: radial-gradient(#fefff6 45px, transparent 0);
        background-size: 250px 250px;
        top: -3000px;
        left: 4000px;
      }
    }
  }

  @media (max-width: 600px) {
    &.home_bg {
      &::before {
        width: 700%;
        height: 700%;
        background-image: radial-gradient(#fefff6 30px, transparent 0);
        background-size: 200px 200px;
        top: -6500px;
        left: 6000px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  /* height: 65vh; */
  width: 80vw;
  padding: 10vh 10vw;
  position: relative;
  font-family: Galmuri11;

  .header {
    transform: translateY(50%);
    transition: all 400ms ease-in-out;
    opacity: 0;
    &.focused {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .typing {
    margin-bottom: 10px;
    width: max-content;
    color: var(--color-red);
    font-size: 1.7rem;
    white-space: nowrap;
  }

  .title {
    font-size: 2.1rem;
  }
  .title-expand {
    font-family: Pretendard-ExtraLight;
    display: flex;
    padding-top: 10px;
    font-size: 1.6rem;
    :nth-child(2) {
      text-decoration: var(--color-green) wavy underline;
    }
  }

  @media (max-width: 1400px) {
    .typing {
      margin-bottom: 10px;
      font-size: 1.5rem;
      white-space: nowrap;
    }

    .title {
      font-size: 1.9rem;
    }
    .title-expand {
      padding-top: 10px;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1200px) {
    .typing {
      margin-bottom: 8px;
      font-size: 1.4rem;
    }

    .title {
      font-size: 1.8rem;
    }
    .title-expand {
      padding-top: 8px;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 992px) {
    .typing {
      margin-bottom: 6px;
      font-size: 1.3rem;
    }

    .title {
      font-size: 1.6rem;
    }
    .title-expand {
      padding-top: 6px;
      font-size: 1.2rem;
      display: block;
    }
  }
  @media (max-width: 900px) {
    .typing {
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    .title {
      font-size: 1.5rem;
    }
    .title-expand {
      padding-top: 4px;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    .typing {
      margin-bottom: 5px;
      font-size: 1rem;
    }
    .title {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
    padding: 10vh 5vw;
    .typing {
      margin-bottom: 5px;
      font-size: 1rem;
    }
    .title {
      font-size: 1.2rem;
    }
  }
`;
