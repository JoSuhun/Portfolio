import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import mail_icon from "/img/icons/mail.png";
import link_icon from "/img/icons/link.png";
import * as t from "../styles/common/GetInTouchStyle";

const GetInTouch = () => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    return () => setCopied(false);
  }, []);
  return (
    <>
      <div
        className="fixed bottom-5 right-0 w-auto h-10 bg-gon-orange
      flex justify-center items-center px-3
      font-DungGeunMo text-lg
      text-white cursor-pointer shadow-md
      "
        onClick={() => setClicked(!clicked)}
      >
        <div>{clicked ? ">" : "Get In Touch!"}</div>
      </div>

      <div
        className={`fixed bottom-20 h-auto w-70 p-5
            bg-white bg-opacity-40 rounded-2xl backdrop-blur-sm shadow-md
             transition-transform duration-500
             right-0
             flex flex-col gap-3
             transform ${clicked ? "-translate-x-3" : "translate-x-full"}`}
      >
        <div
          className="w-auto h-auto flex justify-center items-center px-3
      font-DungGeunMo text-xl text-gon-orange"
        >
          <div>Get In Touch!</div>
        </div>
        <CopyToClipboard
          text="chosh9128@gmail.com"
          onCopy={() => setCopied(true)}
        >
          <t.TouchItem onMouseLeave={() => setCopied(false)}>
            <div className="tooltip">{copied ? "복사완료!" : "복사하기"}</div>
            <img src={mail_icon} className="w-5 mr-1" />
            <div>chosh9128@gmail.com</div>
          </t.TouchItem>
        </CopyToClipboard>

        <t.TouchItem
          onClick={() => window.open("https://github.com/JoSuhun", "_blank")}
        >
          <img src={link_icon} className="w-5 mr-1" />
          <div>Github</div>
        </t.TouchItem>

        <t.TouchItem
          onClick={() =>
            window.open("https://velog.io/@chosh9128/posts", "_blank")
          }
        >
          <img src={link_icon} className="w-5 mr-1" />
          <div>Velog</div>
        </t.TouchItem>
      </div>
    </>
  );
};

export default GetInTouch;
