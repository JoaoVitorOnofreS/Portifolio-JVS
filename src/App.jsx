import Topbar from "./Components/Topbar/Topbar";
import Intro from "./Components/Intro/Intro";
import Portifolio from "./Components/Portifolio/Portifolio";
import Works from "./Components/Works/Works";
import Testemunhos from "./Components/Testemunhos/Testemunhos";
import Contato from "./Components/Contato/Contato";
import Menu from "./Components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portifolio />
        <Works />
        <Testemunhos />
        <Contato />
      </div>
    </div>
  );
}

export default App;
