import "./Works.scss";

import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      title: "HTML e CSS",
      img: "assets/images/codificacao.png",
      desc: " Conhecimentos em HTML e CSS, construção de templates responsivos e que entregam tanto funcionalidade e também um visual que agrada ao usuário.",
    },
    {
      id: 2,
      title: "JAVASCRIPT",
      img: "assets/images/javascript.png",
      desc: "Atuação com Javascript, estudando a linguagem para evoluir mais e também evoluir mais em frameworks que utilizam ela, como por exemplo o ReactJs e Nodejs.",
    },
    {
      id: 3,
      title: "REACT.JS",
      img: "assets/images/react .png",
      desc: "A tecnologia mais recente em que atualmente estou me dedicando a conhecer mais e fazer projetos, estudando o React há 6 meses e já fazendo alguns projetos como este portifólio.",
    },
    {
      id: 4,
      title: "FLUTTER",
      img: "assets/images/flutter.png",
      desc: "Utilizo esse ferramenta para realizar projetos em dispositivos móveis, ultimamente aprendendo essa maravilhosa tecnologia que quero explorar mais.",
    },
    {
      id: 5,
      title: "GIT (Controle de Versionamento)",
      img: "assets/images/git.png",
      desc: "Conhecimento de git e controle de versionamento, utilizando o github para guardar projetos e afins.",
    },
    {
      id: 6,
      title: "BOOTSTRAP",
      img: "assets/images/boot.png",
      desc: "Conhecimento em Bootstrap, primeiro framework que utilizei, versátil, simples e confiável.",
    },
    {
      id: 7,
      title: "SQL",
      img: "assets/images/sql.png",
      desc: "Utilizo o sql para a estruturação do banco de dados e controle de entrada  e armazenamento de dados em uma aplicação.",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right ">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/images/next.png"
        alt="right-arrow.png"
        className="arrow left"
        onClick={() => handleClick("Left")}
      />
      <img
        src="assets/images/next.png"
        alt="right-arrow.png"
        className="arrow right"
        onClick={() => handleClick("")}
      />
      <h1 className="teste">Minhas Skills</h1>
    </div>
  );
}
