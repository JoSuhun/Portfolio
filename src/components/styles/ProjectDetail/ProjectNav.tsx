import styled from "styled-components";

export const SideNavWrapper = styled.div<{ $color: string }>`
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
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 5px;
  padding: 5px 0;
  background-color: #ffffff80;
  border-radius: 10px;
  @media (max-width: 1500px) {
    font-size: 0.9rem;
    /* height: 25px; */
  }
  div {
    padding: 0 5%;
    display: flex;
  }
  &:hover {
    background-color: white;
  }

  &.link_container {
    &:hover {
      background-color: #ffffff80;
    }
  }

  .link_box {
    display: flex;
    flex-direction: column;
    padding: 5px;
    div {
      font-family: Galmuri11-Bold;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      padding: 3px;
      &.go_github {
        background-color: #dbcfec;
        margin-bottom: 7px;
        &:hover {
          background-color: #d7c8eb;
        }
      }
      &.go_notion {
        background-color: #f7f3bf;
        &:hover {
          background-color: #f3eeae;
        }
      }
      img {
        height: 20px;
      }
    }
  }
`;
