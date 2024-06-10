import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 11;
    background-color: white;
  }
  color: black;
  .percentage {
    color: black;
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 7rem;
    font-family: Galmuri11-Bold;
    color: var(--color-grey);
    text-shadow: 5px 5px lightgrey;
    content: "22";
  }
  div {
    z-index: 15;
  }
`;

export const ProgressBarContainer = styled.div<{ progress: number }>`
  /* margin: 100px auto; */
  /* text-align: center; */
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 50%;

  .progress2 {
    padding: 5px;
    border-radius: 30px;
    background: rgba(152, 152, 152, 0.25);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
      0 1px rgba(255, 255, 255, 0.08);
  }

  .progress-bar2 {
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

  .progress-moved .progress-bar2 {
    width: ${(Props) => Props.progress}%;
    background-color: hotpink;
  }
`;
