import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 60,
      backDelay: 1500,
      strings: ["MOBILE", "WEB"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/eu2022.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá Pessoal, sou o </h2>
          <h1> João Vitor Santos</h1>
          <h3>
            Desenvolvedor <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portifolio">
          <img
            src="assets/images/down-arrow.png"
            alt=""
            className="imag-icon"
          />
        </a>
      </div>
    </div>
  );
}
