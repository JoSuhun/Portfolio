import React from "react";
import * as h from "../styles/Home";

const IntroSection = () => {
  return (
    <h.Wrapper>
      <h.IntroContainer>
        <p className="typing"></p>
        <div className="title">
          Front-end Developer
          <p>생각이 많은 개발자 조수훈입니다.</p>
        </div>

        <ul className="content">
          <li>효율적이고 재사용이 가능한 코드를 작성합니다.</li>
          <li>사용자 경험을 따른 사용자 입장의 UI/UX를 중시합니다.</li>
          <li>긍정적인 관계에서 나오는 팀워크의 힘을 중요하게 생각합니다.</li>
        </ul>
      </h.IntroContainer>
    </h.Wrapper>
  );
};

export default IntroSection;
