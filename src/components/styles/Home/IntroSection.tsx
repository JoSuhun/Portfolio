import styled from "styled-components";

// IntroSection
export const IntroContainer = styled.div`
  padding-top: 10dvh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  position: relative;

  .left_section {
    display: flex;
    align-items: center;
  }

  .right_section {
    display: flex;
    justify-content: flex-end;
    .right_box {
      background-color: #ffffff60;
      box-shadow: 5px 5px 5px #d7d7d740, -5px -5px 7px #d7d7d718;
      width: 90%;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 5%;
      }
    }
  }

  .content {
    padding-top: 70px;
    font-family: Pretendard-Light;
    p {
      font-size: 2rem;
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
  @media (max-width: 1500px) {
    .content {
      padding-top: 60px;
      p {
        font-size: 1.5rem;
        padding-bottom: 7px;
      }
    }
  }
  @media (max-width: 1200px) {
    .content {
      p {
        font-size: 1.3rem;
        padding-bottom: 7px;
      }
    }
  }
  @media (max-width: 992px) {
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

  @media (max-width: 800px) {
    padding-top: 5vh;
    img {
      width: 70%;
    }
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
        width: 70%;
        align-self: center;
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
