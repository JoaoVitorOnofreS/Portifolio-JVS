import "./portifoliolist.scss";

export default function Portifoliolist({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portifoliolist active" : "portifoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
