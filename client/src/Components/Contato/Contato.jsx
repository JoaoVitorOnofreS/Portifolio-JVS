import { useState } from "react";
import "./Contato.scss";
import { db } from "../../../firebase";

export default function Contato() {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        email: email,
        comentario: comentario,
      })
      .then(() => {
        alert("Mensageem enviada");
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail(""), setComentario("");
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
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <textarea
            placeholder="Sua Mensagem"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
          <button onClick={addComentario}>Enviar</button>
          {comentario && <span>Obrigado por enviar uma mensagem {email})</span>}
        </form>
      </div>
    </div>
  );
}
