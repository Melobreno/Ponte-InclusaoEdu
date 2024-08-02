import Footer from "../../Components/molecules/Footer/Footer";
import NavBar from "../../Components/organisms/NavBar/index";
import Btn from "../../Components/atoms/Button/index";
import { SobreNos } from "./capStyled";

function Captacao() {
  const value = "Confirmar";
  return (
    <>
      <NavBar />

      <SobreNos>
        <div class="textos">
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

        <div className="container">
          <div class="inputs">
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Telefone" />

            <div class="bigInput">
              <textarea
                name=""
                id=""
                placeholder="Descreva a neurodivergência"
              ></textarea>
            </div>
          </div>

          <div class="checkbox">
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
                Ao selecionar, você está concordando com as políticas de
                privacidade
              </span>
            </div>
            <div class="button">
              <Btn txt={value} />
            </div>
          </div>
        </div>
      </SobreNos>

      <Footer />
    </>
  );
}

export default Captacao;
