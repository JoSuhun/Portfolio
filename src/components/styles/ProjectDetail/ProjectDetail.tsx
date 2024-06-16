import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* overflow: hidden; */
  /* background-color: var(--color-beige); */
  display: flex;
  flex-direction: column;
`;

export const InnerWrapper = styled.div`
  width: 90vw;
  height: 100vh;
  align-self: center;
  margin-bottom: 10vh;
  position: relative;
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  background-color: #f9f9f9;
  border-radius: 20px;
  /* box-shadow: 5px 5px 15px #bfbfbf14, -5px -5px 15px #bfbfbf14; */
`;
