import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90vw;
  min-height: 70vh;
  margin: 10vh 10vw;
  position: relative;
  display: flex;
`;

// GlbSection
export const GlbWrapper = styled.div`
  height: 60vh;
  width: 50vw;
  background-color: transparent;
`;

// IntroSection

export const IntroContainer = styled.div`
  font-family: Galmuri11;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .typing {
    width: max-content;
    color: transparent;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  .typing::after {
    content: "어서오세요,";
    position: absolute;
    top: 20%;
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
      width: 135px;
    }
    100% {
      width: 0%;
    }
  }

  .title {
    font-size: 2rem;
  }

  .content {
    padding-top: 30px;
    p {
      font-size: 1.2rem;
      padding-bottom: 5px;
    }
  }
`;
