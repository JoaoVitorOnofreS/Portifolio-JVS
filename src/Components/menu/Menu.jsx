import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portifolio">Portifolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testemunhos">Siga-me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </div>
  );
}
