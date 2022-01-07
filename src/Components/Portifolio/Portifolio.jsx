import { useState } from "react";
import { useEffect } from "react";
import Portifoliolist from "../PortifolioList/Portifolio.list";
import "./Portifolio.scss";
import {
  designPortfolio,
  mobilePortfolio,
  webPortfolio,
  featuredPortfolio,
} from "../data";

export default function Portifolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "website",
      title: "Website",
    },
    {
      id: "mobile",
      title: "App Mobile",
    },
    {
      id: "design  ",
      title: "Design UI/UX ",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portifolio" id="portifolio">
      <h1>Portifolio</h1>
      <ul>
        {list.map((item) => (
          <Portifoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img className="img" src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
