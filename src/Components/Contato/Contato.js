import { useRef, useState } from "react";
import "./Contato.scss";
import emailjs from "emailjs-com";

const Result = () => {
  return <p className="sucess">Sua mensagem foi enviada com sucesso!</p>;
};

export default function Contato() {
  const [result, showResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_438bqzi",
        "template_lfrfsq3",
        form.current,
        "user_877SpYsyNjezqmWItklFJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
          ></input>
          <textarea name="message" placeholder="Deixa sua mensagem"></textarea>
          <button type="submit" value="Send">
            Enviar
          </button>
          <div className="row">{result ? <Result /> : null}</div>
        </form>
      </div>
    </div>
  );
}
