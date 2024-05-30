import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 90vw; */
  min-height: 65vh;
  margin: 10vh 10vw;
  position: relative;
  display: flex;
  /* align-items: center; */
`;

// GlbSection
export const GlbWrapper = styled.div`
  height: 60vh;
  width: 35vw;
  padding-top: 10vh;

  background-color: transparent;
`;

// IntroSection

export const IntroContainer = styled.div`
  font-family: Galmuri11;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .typing {
    margin-bottom: 10px;
    width: max-content;
    color: transparent;
    font-size: 1.7rem;
    white-space: nowrap;
  }

  .typing::after {
    content: "안녕하세요,";
    /* position: absolute; */
    /* top: 20%; */
    color: var(--color-red);
    overflow: hidden;
    border-right: 1px solid var(--color-red);
    animation: typing 3s steps(6) infinite;
  }

  @keyframes typing {
    0% {
      width: 0%;
    }
    50% {
      width: 150px;
    }
    100% {
      width: 0%;
    }
  }

  .title {
    font-size: 2.1rem;
    .title-expand {
      font-family: Pretendard-ExtraLight;
      padding-top: 10px;
      font-size: 1.6rem;
      :nth-child(2) {
        text-decoration: var(--color-green) wavy underline;
      }
    }
  }

  .content {
    padding-top: 70px;
    font-family: Pretendard-Light;
    p {
      font-size: 1.6rem;
      padding-bottom: 7px;
    }
  }
`;

// InfoSection

export const InfoContainer = styled.div`
  height: 100%;
  width: 100%;

  hr {
    display: block;
    position: absolute;
    border-top: 2px solid transparent;
    z-index: -1;
    left: 0px;
    margin: 0;
  }
  hr.right {
    left: auto;
    right: 0px;
  }

  hr.line {
    border-color: var(--color-green);
    width: 100%;
    animation: thread2 1700ms ease-in-out;
  }

  @keyframes thread2 {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
