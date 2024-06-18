import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 20px;
  font-family: Galmuri11;
  position: relative;

  .title {
    font-size: 1.2rem;
    span {
      font-family: Galmuri11-Bold;
    }
  }

  .img_box {
    width: 100%;
    height: 360px;
    overflow-y: auto;
    margin-top: 10px;

    img {
      height: 350px;
      margin-right: 10px;
    }
  }

  .task_box {
    p {
      font-family: Pretendard;
    }
    div {
      margin: 15px 0;
    }
    .list_child {
      font-family: Pretendard-Light;
      margin-left: 25px;
      line-height: 1.5;
    }
  }
  @media (max-width: 1500px) {
    .img_box {
      height: 310px;
      img {
        height: 300px;
      }
    }
  }
`;

export const ListTitle = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding-top: 10px;
  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const ListIcon = styled.img`
  height: 20px;
  aspect-ratio: 1;
  margin-right: 7px;
`;

export const InnerWrapper = styled.div`
  max-width: 100%;
  margin: 10px 0;
  margin-bottom: 3%;
  padding: 5px 0;
  font-family: Pretendard-Light;
  font-size: 1.2rem;
  background-color: var(--card-background);
  box-shadow: var(--card-shadow);
  border-radius: 10px;
  p {
    margin: 7px 10px;
  }

  .skill_box {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    .skill_item {
      margin: 5px;
      padding: 5px 10px;
      min-width: max-content;
      border-radius: 5px;
      background-color: #ffffff;
      font-family: Galmuri11;
      letter-spacing: 1px;
      font-size: 0.9rem;
      box-shadow: var(--card-shadow);
    }
  }
  @media (max-width: 1500px) {
    font-size: 1rem;
    .skill_box {
      .skill_item {
        font-size: 0.8rem;
      }
    }
  }
`;
