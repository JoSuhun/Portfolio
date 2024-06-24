import styled from "styled-components";

export const ProjectItem = styled.div`
  /* width: 100%; */
  padding: 20px;
  background-color: var(--card-background);
  cursor: pointer;
  box-shadow: none;
  transform: translateY(0%);
  transition: all 200ms ease-in-out;
  border-radius: 10px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--card-shadow);
    div {
      &::before {
        opacity: 0;
      }
    }
  }
  @media (max-width: 992px) {
    display: flex;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 1.8;
  overflow: hidden;
  position: relative;
  &::before {
    transition: all 300ms ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.1;
  }
  img {
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ProjectContent = styled.div`
  margin-top: 5px;
  padding-top: 5px;
  .project_title {
    font-family: Galmuri11-Bold;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.9rem;
    margin-top: 5px;
  }
  @media (max-width: 1200px) {
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 992px) {
    padding-left: 10%;
    margin-top: 0px;
    padding-top: 0px;
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 786px) {
    padding-left: 5%;
    p {
      font-size: 0.8rem;
    }
  }
`;
