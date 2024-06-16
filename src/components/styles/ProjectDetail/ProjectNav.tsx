import styled from "styled-components";

export const SideNavWrapper = styled.div`
  background-color: var(--card-background);
  box-shadow: var(--card-shadow);
  border-radius: 20px;
  height: 20%;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 3%;
  margin: 20px;
  padding: 3% 0;
`;

export const NavItem = styled.div`
  font-family: Galmuri11;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 3%;
  width: 90%;
  height: 30px;
  margin: 10px 0;
  background-color: #ffffff80;
  border-radius: 10px;
`;
