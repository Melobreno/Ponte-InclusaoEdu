import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import { Section, Direita } from "./stlyled";
import img from "../../assets/Avatar 1.svg";
import img2 from "../../assets/avatar2.svg";
import img3 from "../../assets/avatar3.svg";
import lupa from "../../assets/lupa.svg";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import { Surgir } from "../../Components/motion";
function Chat() {
  return (
    <>
      <Pesquisa />
      <Section>
        <div className="sidebar">
          <SideDocumentacao />
        </div>
        <Surgir>
          <section className="conversasIf">
            <div className="secEsquerda">
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
            </div>

            <Direita>
              <iframe
                src="https://chat-frontend-rjpu.onrender.com"
                frameborder="0"
              ></iframe>
            </Direita>
          </section>
        </Surgir>
      </Section>
    </>
  );
}
export default Chat;
