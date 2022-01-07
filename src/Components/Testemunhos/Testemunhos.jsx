import "./Testemunhos.scss";

export default function Testemunhos() {
  const medias = [
    {
      id: 1,
      img: "assets/images/github.png",
      desc: "Me siga no Github",
      link: "https://github.com/joaovitoronofre",
    },
    {
      id: 2,
      img: "assets/images/linkedin.png",
      desc: "Me siga no Linkedin",
      link: "https://www.linkedin.com/in/jo%C3%A3ovitorodossantos/",
    },
    {
      id: 3,
      img: "assets/images/instagram.png",
      desc: "Me siga no Instagram",
      link: "https://www.instagram.com/ojaooo_/",
    },
  ];
  return (
    <div className="testemunhos" id="testemunhos">
      <h1 className="titleone">Onde me encontrar?</h1>
      <div className="container">
        {medias.map((d) => (
          <div className="card">
            <div className="top">
              <a href={d.link} rel="noopener">
                <img src={d.img} alt="" className="imagem" />
              </a>
            </div>
            <div className="center">
              <h1>{d.desc}</h1>
            </div>
            <div className="bottom"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
