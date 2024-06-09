import styled from "styled-components";

export const FooterWrapper = styled.div`
  min-height: 25vh;
  width: 80vw;
  padding: 5vh 10vw;
  border-top: 1px solid var(--color-red);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    height: 15vh;
  }
`;

export const InfoBoxContainer = styled.div`
  width: 100%;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const InfoBox = styled.div`
  cursor: pointer;
  font-family: Pretendard;
  padding-bottom: 5px;
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-in-out;
  font-size: 1rem;
  border-bottom: 1px solid var(--color-green);

  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin-bottom: 10px;
  }
`;

export const Comment = styled.div`
  font-family: Galmuri11;
  font-size: 2rem;
  width: 100%;
  text-align: end;
  span {
    color: var(--color-red);
  }
  @media (max-width: 992px) {
    font-size: 1.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin: 30px 0;
  }
`;
