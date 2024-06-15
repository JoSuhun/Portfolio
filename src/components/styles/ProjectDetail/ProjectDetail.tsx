import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #41414a;
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  width: 90vw;
  height: 180vh;
  align-self: center;
  margin-bottom: 10vh;
  /* position: fixed;
  top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #00000022, -5px -5px 15px #00000022;
`;
