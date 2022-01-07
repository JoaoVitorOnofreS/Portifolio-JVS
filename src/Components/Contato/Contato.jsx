import { useState } from "react";
import "./Contato.scss";

export default function Contato() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contato" id="contato">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/images/contato.png" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Contato</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Sua Mensagem"></textarea>
          <button>Enviar</button>
          {message && <span>Obrigado por enviar uma mensagem :)</span>}
        </form>
      </div>
    </div>
  );
}
