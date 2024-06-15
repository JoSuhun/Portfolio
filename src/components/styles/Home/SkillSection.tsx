import styled from "styled-components";

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
      font-size: 0.7rem;
      &.competent_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -7px;

        min-width: max-content;
        &::after {
          border: 0px solid transparent;
        }
      }
      &.advanced_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -7px;

        min-width: max-content;
        &::after {
          border: 0px solid transparent;
        }
      }
      &.beginner_ex {
        top: unset;
        left: unset;
        right: 0;
        bottom: -7px;

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
  @media (max-width: 600px) {
    .skill_text {
      font-size: 0.8rem;
    }
    div p {
      font-size: 0.9rem;
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
