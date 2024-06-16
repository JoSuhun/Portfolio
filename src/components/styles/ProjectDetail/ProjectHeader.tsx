import styled from "styled-components";

export const Header = styled.div<{ $color: string }>`
  font-family: Galmuri11-Bold;
  font-size: 1.3rem;
  width: 90vw;
  margin: 20px 5vw;
  div {
    background-color: rgba(255, 255, 255, 0.7);
    width: max-content;
    padding: 10px 20px;
    border-radius: 25px;
  }
  span {
    font-family: Galmuri11;
  }
`;
