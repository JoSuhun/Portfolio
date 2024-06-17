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
  width: 90%;
  align-self: center;
  min-height: 100vh;
  margin-bottom: 10vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #ffffff6b;
  border-radius: 20px;
`;
