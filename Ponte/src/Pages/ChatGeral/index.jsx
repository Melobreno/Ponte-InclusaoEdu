import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import { Section, Direita } from "./stlyled";
import casa from "../../Assets/casa.svg";
import msg from "../../Assets/msg.svg";
import settings from "../../Assets/settings.svg";
import tresPontos from "../../Assets/tresPontinhos.svg";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";
import lupa from "../../Assets/lupa.svg";
import Btn from "../../Components/atoms/Button/index";
function Chat() {
  const value = "Enviar";
  return (
    <>
      <Pesquisa />
      <Section>
        <div className="menuLateral">
          <img src={casa} alt="" />
          <img src={msg} alt="" className="msg" />
          <img src={settings} alt="" />
        </div>
        <div className="pesquisar">
          <div className="search">
            <input type="text" name="" id="" placeholder="Pesquisar" />
            <button className="button">
              <img src={lupa} alt="" className="lupa" />
            </button>
          </div>

          <div className="conversa">
            <div className="bot1">
              <img src={img2} alt="" className="avatar" />

              <div className="texto">
                <h1 className="titleCv">
                  Priscila Silva
                  <span>15:05</span>
                </h1>
                <p>Sim, será ótimo</p>
              </div>
            </div>

            <div className="bot">
              <img src={img} alt="" className="avatar" />
              <div className="texto">
                <h1 className="titleCv">
                  Lucas Melo <span>17:36</span>
                </h1>
                <p>Tudo bem!</p>
              </div>
            </div>

            <div className="bot">
              <img src={img3} alt="" className="avatar" />
              <div className="texto">
                <h1 className="titleCv">
                  Erick Oliveira
                  <span>17:36</span>
                </h1>
                <p>Certo, aguardo resposta.</p>
              </div>
            </div>
          </div>
        </div>

        <Direita>
          <div className="perfil">
            <img src={img2} alt="" className="avatar" />
            <div className="online">
              <h1>Priscila Silva</h1>
              <span>Online</span>
            </div>
            <img src={tresPontos} alt="" className="tresPontos" />
          </div>
          <div className="mensagem">
            <div className="enviada">
              <p>
                Bom dia, doutora. Você tem um momento para falar sobre meu
                filho?
              </p>
            </div>
            <div className="recebida">
              <p>Bom dia! Claro, estou à disposição. O que está acontecendo?</p>
            </div>
            <div className="enviada">
              <p>
                Ele tem estado muito quieto e isolado ultimamente. Estou
                começando a ficar preocupada.
              </p>
            </div>
            <div className="recebida">
              <p>
                Você gostaria de marcar uma sessão para discutirmos isso com
                mais detalhes?
              </p>
            </div>
            <div className="enviada">
              <p>Sim, acho que seria ótimo. Quando podemos marcar?</p>
            </div>
            <div className="recebida">
              <p>
                Tenho um horário disponível amanhã às 15h. Isso funciona para
                você?
              </p>
            </div>
            <div className="enviada">
              <p>Sim, será ótimo.</p>
            </div>
            <hr />
            <div className="enviar">
              <input
                className="novaMsg"
                type="text"
                placeholder="Escreva uma nova mensagem"
              />

              <div className="botao">
                <Btn txt={value} />
              </div>
            </div>
          </div>
        </Direita>
      </Section>
    </>
  );
}
export default Chat;
