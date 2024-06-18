import CopyToClipboard from "react-copy-to-clipboard";
import * as f from "../styles/common/Footer";
import { useEffect, useState } from "react";
import link_icon from "/img/icons/link.png";
import mail_icon from "/img/icons/mail.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    return () => setCopied(false);
  }, []);
  return (
    <f.FooterWrapper>
      <div className="contact">
        <f.Comment className="top">GET IN TOUCH !</f.Comment>
        <f.InfoBoxContainer>
          <CopyToClipboard
            text="chosh9128@gmail.com"
            onCopy={() => setCopied(true)}
          >
            <f.InfoBox onMouseLeave={() => setCopied(false)}>
              <div className="tooltip">{copied ? "복사완료!" : "복사하기"}</div>
              chosh9128@gmail.com
              <img src={mail_icon} className="mail" />
            </f.InfoBox>
          </CopyToClipboard>
          <f.InfoBox
            onClick={() => window.open("https://github.com/JoSuhun", "_blank")}
          >
            Github
            <img src={link_icon} />
          </f.InfoBox>
          <f.InfoBox
            onClick={() =>
              window.open("https://velog.io/@chosh9128/posts", "_blank")
            }
          >
            Velog
            <img src={link_icon} />
          </f.InfoBox>
        </f.InfoBoxContainer>
      </div>
      <f.Comment>
        감사합니다, <span>조수훈</span>입니다.
      </f.Comment>
    </f.FooterWrapper>
  );
};

export default Footer;
