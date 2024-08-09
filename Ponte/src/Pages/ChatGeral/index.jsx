import { GlobalStyles } from "../../MainStyles";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import { Mensagens, Section } from "./stlyled";
import casa from "../../Assets/casa.svg";
import msg from "../../Assets/msg.svg";
import settings from "../../Assets/settings.svg";
import img from "../../Assets/Avatar 1.svg";
import img2 from "../../Assets/avatar2.svg";
import img3 from "../../Assets/avatar3.svg";
function Chat() {
  return (
    <>
      <GlobalStyles />
      <Pesquisa />
      <Section>
        <div className="menuLateral">
          <img src={casa} alt="" />
          <img src={msg} alt="" />
          <img src={settings} alt="" />
        </div>
        <div>
          <div className="search">
            <input type="text" name="" id="" />
          </div>

          <div className="conversa">
            <div className="bot">
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

        <Mensagens>
          <div>
            <img src={img2} alt="" className="avatar" />
            <h1>Priscila</h1>
            <p>Online</p>
          </div>
          <div>
            <p>
              Bom dia, doutora. Você tem um momento para falar sobre meu filho?
            </p>
            <p>Bom dia! Claro, estou à disposição. O que está acontecendo?</p>
          </div>
        </Mensagens>
      </Section>
    </>
  );
}
export default Chat;
