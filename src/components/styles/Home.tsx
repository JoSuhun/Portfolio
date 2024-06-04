import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 65vh;
  width: 80vw;
  margin: 15vh 10vw;
  position: relative;
  font-family: Galmuri11;

  .typing {
    margin-bottom: 10px;
    width: max-content;
    color: var(--color-red);
    font-size: 1.7rem;
    white-space: nowrap;
  }

  .title {
    font-size: 2.1rem;
    .title-expand {
      font-family: Pretendard-ExtraLight;
      padding-top: 10px;
      font-size: 1.6rem;
      :nth-child(2) {
        text-decoration: var(--color-green) wavy underline;
      }
    }
  }
`;

// GlbSection
export const GlbWrapper = styled.div`
  height: 60vh;
  background-color: transparent;
  overflow: visible;
`;

// IntroSection
export const IntroContainer = styled.div`
  padding-top: 15vh;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  position: relative;

  .content {
    padding-top: 70px;
    font-family: Pretendard-Light;
    p {
      font-size: 1.5rem;
      padding-bottom: 7px;
    }
  }
`;

// InfoSection

export const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* display: flex; */
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  transform: translateX(0);
  transition: all 500ms ease-in-out;

  &.clicked {
    transform: translateX(-22%);
    .glb_section {
      /* opacity: 0; */
    }
  }

  section {
    padding: 10% 0;
  }

  hr {
    display: block;
    position: absolute;
    border-top: 1px solid transparent;
    z-index: -1;
    left: 0px;
  }
  hr.right {
    left: auto;
    right: 0px;
  }

  hr.line {
    border-color: var(--color-green);
    width: 100%;
    animation: thread2 1700ms ease-in-out;
  }

  @keyframes thread2 {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const InfoLeftSection = styled.section`
  /* width: 20vw; */
`;

export const InfoMidSection = styled.section`
  /* width: 50vw; */
  margin-right: 20px;
`;

export const InfoRightSection = styled.section`
  /* width: 50vw; */
  position: relative;
  height: 40%;
  width: 55%;
  margin-left: 7%;
  align-self: center;
  justify-self: start;
  border: 1px solid black;

  &::after {
    width: 30px;
    height: 30px;
    background-color: green;
    position: absolute;
    top: 50%;
  }
`;

export const InfoBox = styled.div`
  /* border: 1px solid yellow; */
  margin: 20px 0;
  padding: 20px;

  display: grid;
  grid-template-columns: 0.7fr 1fr;
  font-family: Galmuri11;

  border-radius: 30px;
  background: var(--card-background);
  box-shadow: var(--card-shadow);
  :nth-child(3) {
    padding-top: 15px;
  }
  :nth-child(4) {
    padding-top: 15px;
  }
  /* cursor: pointer; */
  transform: translateY(0%);
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: translateY(-5%);
  }
`;

export const InfoDate = styled.p``;

export const InfoContent = styled.p`
  font-size: 1.1rem;
  display: flex;
  position: relative;
`;

// SkillSection
export const SkillContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  margin-top: 10px;

  display: grid;
  grid-template-areas:
    "competent advanced"
    "competent beginner";
  gap: 20px;
  overflow: visible;
`;

export const SkillBox = styled.div<{ point: string }>`
  display: flex;
  position: relative;
  padding: 20px;
  /* margin: 10px; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: var(--card-background);
  box-shadow: var(--card-shadow);
  border-radius: 10px;
  cursor: pointer;
  .level {
    background: linear-gradient(
      to top,
      ${(props) => props.point} 50%,
      transparent 40%
    );
  }

  .ex {
    display: none;
    background-color: ${(props) => props.point};
  }

  &.competent {
    grid-area: competent;
    .competent_ex {
      bottom: -60px;
      left: 0;
      &::after {
        content: "";
        position: absolute;
        top: -20px;
        left: 30px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: ${(props) => props.point};
        rotate: 180deg;
      }
    }
    &:hover .competent_ex {
      display: block;
    }
  }

  &.advanced {
    grid-area: advanced;
    .advanced_ex {
      top: -55px;
      &::after {
        content: "";
        position: absolute;
        bottom: -20px;
        left: 30px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: ${(props) => props.point};
      }
    }
    &:hover .advanced_ex {
      display: block;
    }
  }

  &.beginner {
    grid-area: beginner;
    .beginner_ex {
      bottom: -60px;
      right: 0;
      &::after {
        content: "";
        position: absolute;
        top: -20px;
        left: 30px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: ${(props) => props.point};
        rotate: 180deg;
      }
    }
    &:hover .beginner_ex {
      display: block;
    }
  }
`;

export const SkillLevel = styled.p`
  color: var(--color-grey);
  padding-left: 5px;
  padding-right: 15px;
  margin-bottom: 5px;
  font-size: 1.1rem;
  align-self: start;
  /* width: 100%; */
`;

export const SkillItem = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  background-color: #ffffff41;
  display: flex;
  font-family: Pretendard-Light;
  font-size: 1.1rem;
  img {
    height: 40px;
  }
  .skill_text {
    font-family: Galmuri11-Bold;
    font-size: 0.9rem;
    padding-bottom: 5px;
  }
  div {
    margin-left: 20px;
  }
`;

export const Additional = styled.div`
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  min-width: 100px;
  color: var(--color-grey);
  font-size: 0.9rem;
  font-family: Pretendard;
`;

// ProjectSection
export const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
`;

export const ProjectItem = styled.div`
  /* width: 100%; */
  padding: 20px;
  background-color: var(--card-background);
  box-shadow: var(--card-shadow);
  cursor: pointer;
  transform: translateY(0%);
  transition: all 300ms ease-in-out;
  border-radius: 10px;
  &:hover {
    transform: translateY(-2%);
    box-shadow: none;
    div {
      &::before {
        opacity: 0;
      }
    }
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
`;
