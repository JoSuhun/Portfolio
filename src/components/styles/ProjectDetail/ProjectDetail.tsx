import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  margin-bottom: 5dvh;
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  width: 90%;
  align-self: center;
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #ffffff6b;
  border-radius: 20px;
`;

export const BackBtn = styled.div`
  font-family: Galmuri11;
  font-size: 1rem;
  margin: 20px 5vw;
  cursor: pointer;
  img {
    width: 20px;
    &:nth-child(2) {
      margin-left: 10px;
      opacity: 0;
    }
  }
  div {
    padding: 7px 10px;
    width: max-content;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: transparent;
    &:hover {
      transition: all 300ms ease-in-out;
      background-color: white;
      img {
        &:nth-child(2) {
          opacity: 1;
          transition: all 300ms ease-in-out;
        }
      }
    }
  }
`;
