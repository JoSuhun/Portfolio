import React, { useEffect, useState } from "react";
import * as h from "../styles/Home";

const InfoSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", updateScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <h.Wrapper>
      <h.InfoContainer>
        <hr className={scrollPosition > 150 ? "line" : ""} />
      </h.InfoContainer>
    </h.Wrapper>
  );
};

export default InfoSection;
