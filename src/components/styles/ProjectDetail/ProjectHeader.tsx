import styled from "styled-components";

export const Header = styled.div<{ $color: string }>`
  font-family: Galmuri11-Bold;
  font-size: 2.5rem;
  color: white;
  text-shadow: 2px 2px ${(props) => props.$color};
  margin: 20px 0;
  margin-left: 5vw;
`;
