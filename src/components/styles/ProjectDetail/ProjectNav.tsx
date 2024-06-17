import styled from "styled-components";

export const SideNavWrapper = styled.div`
  background-color: var(--card-background);
  box-shadow: var(--card-shadow);
  border-radius: 20px;
  position: relative;
  margin: 20px;
  padding: 3% 0;
  .inner_wrapper {
    width: 100%;
    position: sticky;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .project_title {
      font-family: Galmuri11-Bold;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      text-align: center;
      width: 90%;
      margin: 5px 0;
      padding: 5px 0;
      padding-left: 3%;
      display: none;
      &.visible {
        display: block;
      }
    }
  }
`;

export const NavItem = styled.div`
  font-family: Galmuri11;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  margin: 5px 0;
  padding: 5px 0;
  padding-left: 3%;
  background-color: #ffffff80;
  border-radius: 10px;
  @media (max-width: 1500px) {
    font-size: 0.9rem;
    height: 25px;
  }
  &:hover {
    background-color: white;
  }
`;
