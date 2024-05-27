import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90vw;
  min-height: 70vh;
  margin: 20vh 5vw;
  position: relative;
`;

export const IntroContainer = styled.div`
  font-family: Galmuri11;
  padding: 5% 0;
  display: flex;
  flex-direction: column;

  .typing {
    width: max-content;
    color: transparent;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  .typing::after {
    content: "어서오세요,";
    position: absolute;
    top: 3%;
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
    li {
      font-size: 1.3rem;
    }
  }
`;
