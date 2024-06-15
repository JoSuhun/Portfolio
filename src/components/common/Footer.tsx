import * as f from "../styles/common/Footer";
const Footer = () => {
  return (
    <f.FooterWrapper>
      <f.InfoBoxContainer>
        <f.InfoBox>chosh9128@gmail.com</f.InfoBox>
        <f.InfoBox
          onClick={() => window.open("https://github.com/JoSuhun", "_blank")}
        >
          Github
        </f.InfoBox>
        <f.InfoBox
          onClick={() =>
            window.open("https://velog.io/@chosh9128/posts", "_blank")
          }
        >
          Velog
        </f.InfoBox>
      </f.InfoBoxContainer>
      <f.Comment>
        감사합니다, <span>조수훈</span>입니다.
      </f.Comment>
    </f.FooterWrapper>
  );
};

export default Footer;
