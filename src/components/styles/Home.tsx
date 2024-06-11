import styled from "styled-components";

export const HomeBackGround = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  &.home_bg {
    &::before {
      position: absolute;
      content: "";
      width: 600%;
      height: 600%;
      transform: rotate(-45deg);
      background-image: radial-gradient(#fefff6 50px, transparent 0);
      background-size: 250px 250px;
      background-position: center center;
      transform-origin: center center;
      top: -2000px;
      left: 1500px;
      z-index: -3;
    }
  }
  @media (max-width: 992px) {
    &.home_bg {
      &::before {
        top: -2500px;
        left: 2500px;
        z-index: -3;
      }
    }
  }

  @media (max-width: 870px) {
    &.home_bg {
      &::before {
        background-image: radial-gradient(#fefff6 45px, transparent 0);
        background-size: 250px 250px;
        top: -3000px;
        left: 4000px;
      }
    }
  }

  @media (max-width: 600px) {
    &.home_bg {
      &::before {
        width: 700%;
        height: 700%;
        background-image: radial-gradient(#fefff6 30px, transparent 0);
        background-size: 200px 200px;
        top: -6500px;
        left: 6000px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  /* height: 65vh; */
  width: 80vw;
  padding: 10vh 10vw;
  position: relative;
  font-family: Galmuri11;

  .header {
    transform: translateY(50%);
    transition: all 400ms ease-in-out;
    opacity: 0;
    &.focused {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .typing {
    margin-bottom: 10px;
    width: max-content;
    color: var(--color-red);
    font-size: 1.7rem;
    white-space: nowrap;
  }

  .title {
    font-size: 2.1rem;
  }
  .title-expand {
    font-family: Pretendard-ExtraLight;
    display: flex;
    padding-top: 10px;
    font-size: 1.6rem;
    :nth-child(2) {
      text-decoration: var(--color-green) wavy underline;
    }
  }

  @media (max-width: 1400px) {
    .typing {
      margin-bottom: 10px;
      font-size: 1.5rem;
      white-space: nowrap;
    }

    .title {
      font-size: 1.9rem;
    }
    .title-expand {
      padding-top: 10px;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1200px) {
    .typing {
      margin-bottom: 8px;
      font-size: 1.4rem;
    }

    .title {
      font-size: 1.8rem;
    }
    .title-expand {
      padding-top: 8px;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 992px) {
    .typing {
      margin-bottom: 6px;
      font-size: 1.3rem;
    }

    .title {
      font-size: 1.6rem;
    }
    .title-expand {
      padding-top: 6px;
      font-size: 1.2rem;
      display: block;
    }
  }
  @media (max-width: 900px) {
    .typing {
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    .title {
      font-size: 1.5rem;
    }
    .title-expand {
      padding-top: 4px;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    .typing {
      margin-bottom: 5px;
      font-size: 1rem;
    }
    .title {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    width: 90vw;
    padding: 10vh 5vw;
    .typing {
      margin-bottom: 5px;
      font-size: 1rem;
    }
    .title {
      font-size: 1.2rem;
    }
  }
`;

// GlbSection
export const GlbWrapper = styled.div`
  height: 500px;
  width: 35vw;
  background-color: transparent;
  overflow: visible;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 1300px) {
    height: 450px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 992px) {
    height: 350px;
  }
  @media (max-width: 900px) {
    height: 300px;
    width: 30vw;
  }
  @media (max-width: 768px) {
    height: 250px;
  }
`;

// IntroSection
export const IntroContainer = styled.div`
  padding-top: 15vh;
  display: flex;
  justify-content: space-between;
  position: relative;

  .content {
    padding-top: 70px;
    font-family: Pretendard-Light;
    p {
      font-size: 1.5rem;
      padding-bottom: 7px;
      white-space: nowrap;
    }
    span {
      background: linear-gradient(
        to top,
        rgba(255, 236, 69, 0.274) 40%,
        transparent 40%
      );
    }
  }
  @media (max-width: 1400px) {
    &.intro_container {
    }
    .content {
      padding-top: 60px;
      p {
        font-size: 1.2rem;
        padding-bottom: 7px;
      }
    }
  }
  @media (max-width: 992px) {
    padding-top: 13vh;
    .content {
      padding-top: 50px;
      p {
        font-size: 1.1rem;
      }
    }
  }
  @media (max-width: 900px) {
    &.intro_container {
    }
    .content {
      padding-top: 50px;
      p {
        font-size: 1rem;
        padding-bottom: 6px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-top: 5vh;
    &.intro_container {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      :nth-child(1) {
        order: 2;
        width: 100%;
      }
      :nth-child(2) {
        order: 1;
      }
    }
    .content {
      padding-top: 30px;
      p {
        font-size: 0.9rem;
      }
    }
  }
`;

// InfoSection

export const InfoContainer = styled.div`
  width: 100%;
  overflow: visible;
  display: flex;
  transform: translateX(0);
  transition: all 500ms ease-in-out;

  &.clicked {
    transform: translateX(-22%);
    .glb_section {
      /* opacity: 0; */
    }
  }

  @media (max-width: 992px) {
  }
  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoLeftSection = styled.section`
  width: 30%;
  position: relative;
  overflow: visible;
  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 786px) {
    width: 100%;
    height: 50dvh;
  }
  @media (max-width: 600px) {
    /* height: 80%; */
  }
  div {
    overflow: visible;
  }
  .pika_tooltip {
    position: absolute;
    min-width: max-content;
    z-index: 100;
    top: -230px;
    color: #ffffff;
    letter-spacing: 1px;
    font-size: 0.9rem;
    background-color: #41414a;
    padding: 5px 10px;
    border-radius: 5px;
    &::after {
      content: "";
      position: absolute;
      bottom: -14px;
      left: 10%;
      border: 7px solid transparent;
      border-top-color: #41414a;
      rotate: 0deg;
    }
    @media (max-width: 600px) {
      font-size: 0.8rem;
      top: -220px;
    }
  }
`;

export const InfoMidSection = styled.section`
  /* width: 50vw; */
  margin-right: 20px;
  transform: translateX(200%);
  transition: all 900ms ease-in-out;
  opacity: 0;
  &.focused {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const InfoBox = styled.div`
  /* border: 1px solid yellow; */
  /* margin: 20px 0; */
  margin-bottom: 20px;
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
  @media (max-width: 1200px) {
    margin-bottom: 15px;
    padding: 15px;
    grid-template-columns: 0.5fr 1fr;

    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 12px;
    padding: 12px;
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 786px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const InfoTitle = styled.p`
  /* background-color: red; */
  margin-left: 5px;
  margin-bottom: 5px;
  font-family: Galmuri11-Bold;
  @media (max-width: 786px) {
    font-size: 0.9rem;
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
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SkillBox = styled.div<{ point: string }>`
  display: flex;
  position: relative;
  padding: 25px;
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
  @media (max-width: 992px) {
    .ex {
      display: block;
      background-color: transparent;
      min-width: 100%;
      font-family: Galmuri11;
      color: darkslategray;
      font-size: 0.8rem;
      &.competent_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -5px;

        min-width: max-content;
        &::after {
          border: 0px solid transparent;
        }
      }
      &.advanced_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -5px;

        min-width: max-content;
        &::after {
          border: 0px solid transparent;
        }
      }
      &.beginner_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -5px;

        min-width: max-content;
        &::after {
          border: 0px solid transparent;
        }
      }
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
  @media (max-width: 992px) {
    font-size: 1rem;
  }
  @media (max-width: 786px) {
    font-size: 0.9rem;
  }
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
  @media (max-width: 1200px) {
    div p {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    img {
      height: 30px;
    }
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
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

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
