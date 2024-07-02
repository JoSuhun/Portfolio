import styled from "styled-components";

export const TouchItem = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: gray;
  padding: 0.3rem 1rem;
  color: white;
  font-family: Pretendard-ExtraLight;
  font-size: 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
    .tooltip {
      display: block;
    }
  }
  .tooltip {
    font-family: DOSSaemmul;
    position: absolute;
    left: -45%;
    min-width: max-content;
    z-index: 100;
    color: #ffffff;
    letter-spacing: 1px;
    font-size: 0.8rem;
    background-color: var(--color-grey);
    padding: 5px 10px;
    border-radius: 5px;
    display: none;
    &::after {
      content: "";
      position: absolute;
      top: 25%;
      right: -13px;
      transform-origin: center;
      border: 7px solid transparent;
      border-top-color: var(--color-grey);
      rotate: -90deg;
    }
  }
`;
