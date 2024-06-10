import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #41414a;

  .inner_wrapper {
    background-color: #f9f9f9;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #00000022, -5px -5px 15px #00000022;
  }
  .welcome_message {
    width: 450px;
    height: 150px;
    font-family: Galmuri11;
    animation: bounce 2s infinite;

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-7px);
      }
      60% {
        transform: translateY(-3px);
      }
    }

    img {
      width: 100%;
      height: 100%;
      /* position: absolute; */
      /* top: 0; */
      /* left: 0; */
    }
    p {
      font-size: 1rem;
      width: 100%;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    @media (max-width: 768px) {
      width: 350px;
      height: 130px;
      p {
        font-size: 0.8rem;
      }
    }
  }

  .percentage {
    color: black;
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 6rem;
    font-family: Galmuri11-Bold;
    color: #f6bd20;
    text-shadow: 5px 5px #747483;
  }
  div {
    z-index: 15;
  }
  @media (max-width: 768px) {
    .percentage {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    .percentage {
      font-size: 3rem;
    }
  }
`;

export const ProgressBarContainer = styled.div<{ progress: number }>`
  /* margin: 100px auto; */
  /* text-align: center; */
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 50%;

  .progress {
    padding: 5px;
    border-radius: 30px;
    background: rgba(152, 152, 152, 0.25);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
      0 1px rgba(255, 255, 255, 0.08);
  }

  .progress_bar {
    height: 10px;
    border-radius: 30px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    transition: 0.4s linear;
    transition-property: width, background-color;
  }

  .progress_moved .progress_bar {
    width: ${(Props) => Props.progress}%;
    background-color: #c52018;
  }
`;
