import Footer from "../../Components/molecules/Footer/Footer";
import NavBar from "../../Components/organisms/NavBar/index";
import Btn from "../../Components/atoms/Button/index";
import { useNavigate } from "react-router-dom";
import { SobreNos } from "./capStyled";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Captacao() {
  const [email, setValorEmail] = useState("");
  const [nome, setValorNome] = useState("");
  const form = useRef();
  const navegar = useNavigate();
  const value = "Confirmar";

  const enviarEmail = (e) => {
    e.preventDefault();

    const templateFrom = {
      from_name: nome,
      email: email,
    };
    emailjs
      .send(
        "service_2a2n0a7",
        "template_bqqgk1j",
        templateFrom,
        "XvMCp97Xp3jJswaGP"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          navegar("/Assinaturas");
        },
        (error) => {
          console.log("Error ao enviar email", error.text);
        }
      );
  };

  return (
    <>
      <NavBar />
      <SobreNos>
        <div className="textos">
          <h1>COMO POSSO COMEÇAR USAR A PONTE ?</h1>
          <p>
            Para começar usar a ponte basta preencher os campos solicitados na
            plataforma, para conhecer os planos de assinatura
          </p>
          <p>
            Siga as instruções para conectar-se aos profissionais que acompanham
            o desenvolvimento da criança.
          </p>
        </div>
        <form ref={form} onSubmit={enviarEmail}>
          <div className="container">
            <div className="inputs">
              <input
                type="text"
                placeholder="Nome Completo"
                value={nome}
                onChange={(e) => setValorNome(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setValorEmail(e.target.value)}
              />
              <input type="text" placeholder="Telefone" />

              <div className="bigInput">
                <textarea
                  name=""
                  id=""
                  placeholder="Descreva a neurodivergência"
                ></textarea>
              </div>
            </div>

            <div className="checkbox">
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Ao selecionar, você autoriza a Ponte enviar Emails com
                  atualizações e novidades da ferramenta
                </span>
              </div>

              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  Ao selecionar, você está concordando com as
                  <span className="politicSpan"> políticas de privacidade</span>
                </span>
              </div>
              <div className="button">
                <Btn txt={value} type="onSubmit" />
              </div>
            </div>
          </div>
        </form>
      </SobreNos>
      <Footer />
    </>
  );
}

export default Captacao;
