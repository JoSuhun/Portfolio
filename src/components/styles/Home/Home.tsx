import styled from "styled-components";

export const HomeBackGround = styled.div`
  overflow: hidden;
  position: relative;
  /* width: 100%;
  height: 100%; */
  .home_bg {
    &::before {
      position: absolute;
      content: "";
      width: 200%;
      height: 120%;
      transform: rotate(-45deg);
      background-image: radial-gradient(#fefff6c1 65px, transparent 0);
      background-size: 220px 220px;
      background-position: center center;
      transform-origin: center center;
    }
  }
  .scrolldown {
    --color: #00000051;
    --sizeX: 25px;
    --sizeY: 40px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #5d5d5d20;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }

  .chevrons {
    padding: 6px 0 0 0;
    margin-left: -2px;
    margin-top: 40px;
    width: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
  }

  .chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
  }

  .chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.5;
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
    font-size: 2rem;
    white-space: nowrap;
  }

  .title {
    font-size: 2.3rem;
  }
  .title-expand {
    font-family: Pretendard-ExtraLight;
    display: flex;
    padding-top: 10px;
    font-size: 1.9rem;
    :nth-child(2) {
      text-decoration: var(--color-green) wavy underline;
    }
  }

  @media (max-width: 1500px) {
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
