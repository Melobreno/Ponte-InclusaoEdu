import { GlobalStyles } from "../../MainStyles";
import { Section, Escreva, Mensagem, Mensagem2 } from "./styled";
import img from "../../Assets/Avatar 1.svg";
import Btn from "../../Components/atoms/Button/index";
function Feed() {
  const value = "Enviar";
  return (
    <>
      <GlobalStyles />
      <Section>
        <Escreva>
          <div className="novaMsg">
            <img className="img" src={img} alt="" />
            <textarea
              name="digiteMsg"
              id=""
              placeholder="Digite uma nova mensagem..."
            ></textarea>
          </div>
          <hr />
          <div className="botao">
            <Btn txt={value} />
          </div>
        </Escreva>
        <Mensagem>
          <div className="enviado">
            <img className="img" src={img} alt="" />
            <div className="texto">
              <h1>Lucas Melo</h1>
              <p>
                Desenvolvimento: Estou super orgulhosa! Desde que vocês
                começaram a acompanhar mais de perto o desenvolvimento escolar
                do meu filho, ele tem feito progressos incríveis.
              </p>
            </div>
          </div>
        </Mensagem>
        <Mensagem2>
          <div className="enviado">
            <img className="img" src={img} alt="" />
            <div className="texto">
              <h1>Priscila Silva</h1>
              <p>
                Jornada: Muito feliz em ver como o João está se desenvolvendo e
                aprendendo tanto! Vamos continuar apoiando e incentivando cada
                passo dessa jornada. 🚀❤️
              </p>
            </div>
          </div>
        </Mensagem2>
      </Section>
    </>
  );
}

export default Feed;
