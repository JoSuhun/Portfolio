import styled from "styled-components";

export const ModalWrapper = styled.div`
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
    width: 100vw;
    height: 100vh;
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
  width: 60vw;
  padding: 3%;
  background-color: #ffffffee;
  border-radius: 10px;

  .title {
    font-family: Galmuri11-Bold;
    font-size: 1.5rem;
  }
  .summary {
    font-family: Galmuri11;
    padding: 5px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
  }
`;

export const ProjectInfoBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 7px 0;
  font-family: Pretendard;
  background-color: var(--card-background);
  border-radius: 10px;
  p {
    padding-left: 7px;
  }
  :first-child {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-family: Pretendard-Bold;
  }
  :nth-child(2) {
  }
  img {
    height: 20px;
    padding-right: 5px;
  }
`;
