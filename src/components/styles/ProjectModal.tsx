import styled from "styled-components";

export const ModalWrapper = styled.div`
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
    width: 100vw;
    height: 100dvh;
    backdrop-filter: blur(3px);
  }
`;

export const ModalCard = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70vh;
  overflow: auto;
  width: 65vw;
  padding: 3%;
  background-color: #ffffffee;
  border-radius: 10px;

  .title {
    font-family: Galmuri11-Bold;
    font-size: 1.5rem;
    position: relative;
  }
  .summary {
    font-family: Galmuri11;
    padding: 5px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
  }
  @media (max-width: 992px) {
    width: 75vw;
  }
  @media (max-width: 600px) {
    height: 50vh;
    padding: 20px 10px;
    .title {
      font-size: 1.3rem;
    }
    .summary {
      font-size: 0.9rem;
    }
  }
`;

export const Link = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  img {
    height: 25px;
    margin: 0 5px;
  }
  span {
    position: absolute;

    font-family: Galmuri11;
    font-size: 0.8rem;
    color: white;
    top: -30px;
    left: 0;
    border-radius: 5px;
    width: max-content;
    padding: 3% 7%;
    box-shadow: var(--card-shadow);
  }

  .go_github {
    span {
      display: none;
      background-color: #2dba4e;
      &::after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: 10%;
        border: 7px solid transparent;
        border-top-color: #2dba4e;
        rotate: 0deg;
      }
    }
    &:hover span {
      display: block;
    }
  }
  .go_notion {
    span {
      display: none;
      background-color: #cb912f;
      &::after {
        content: "";
        position: absolute;
        bottom: -14px;
        right: 10%;
        border: 7px solid transparent;
        border-top-color: #cb912f;
        rotate: 0deg;
      }
    }
    &:hover span {
      display: block;
    }
  }
  @media (max-width: 600px) {
    .go_github {
      &:hover span {
        display: none;
      }
    }
    .go_notion {
      &:hover span {
        display: none;
      }
    }
  }
`;

export const ProjectInfoBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 7px 0;
  font-family: Pretendard;
  background-color: var(--card-background);
  border-radius: 10px;
  .skill_box {
    /* width: 100%; */
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  p {
    padding-left: 7px;
  }
  :first-child {
  }
  img {
    height: 20px;
    padding-right: 5px;
  }
`;

export const InfoTitle = styled.p`
  display: flex;
  margin-bottom: 5px;
  font-family: Pretendard-Bold;
`;

export const ProjectSkillItem = styled.span`
  margin: 5px;
  padding: 5px 10px;
  min-width: max-content;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: Galmuri11;
  font-size: 0.7rem;
  box-shadow: var(--card-shadow);
`;

export const ProjectImage = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  overflow-x: auto;
  margin-bottom: 10px;
  padding: 7px 0;
  font-family: Pretendard;
  background-color: var(--card-background);
  border-radius: 10px;
  img {
    margin-right: 10px;
  }
  @media (max-width: 992px) {
    height: 40%;
  }
  @media (max-width: 600px) {
    height: 40%;
  }
`;

export const TaskItem = styled.p`
  font-family: Pretendard-Bold;
  margin-bottom: 0;
  text-indent: 10px;

  &.list_child {
    font-family: Pretendard;
    text-indent: 20px;
  }
  &:nth-last-child(1) {
    margin-bottom: 10px;
  }
  &:first-child {
    margin-top: 5px;
  }
`;
