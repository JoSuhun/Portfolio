import styled from "styled-components";

// ProjectSection
export const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;
