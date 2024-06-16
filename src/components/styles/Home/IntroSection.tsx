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
  .tomato_q {
    color: black;
    background-color: #ffffff2c;
    border: 1px solid #8a8a8a;
    backdrop-filter: blur(7px);
    border-radius: 50%;
    padding: 5px;
    font-family: DOSSaemmul;
    width: 33px;
    aspect-ratio: 1;
    font-size: 2rem;
    position: absolute;
    top: 5%;
    right: 10%;
    /* transform: translate(-50%, -50%); */
    /* opacity: 0; */
    transition: all 300ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #ff00002c;
    }
  }
  &:hover .tomato_q {
    opacity: 1;
  }
  .tomato_ex {
    /* font-family: DOSSaemmul; */
    width: 70%;
    font-size: 1.1rem;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    position: absolute;
    top: 15%;
    right: 10%;
    background: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    z-index: 0;
    :nth-child(1) {
      font-family: Galmuri11-Bold;
      margin-bottom: 5px;
    }
    :nth-child(2) {
    }
  }

  .tomato_q:hover + .tomato_ex {
    opacity: 1;
  }
  @media (max-width: 1900px) {
    .tomato_ex {
      font-size: 0.9rem;
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
