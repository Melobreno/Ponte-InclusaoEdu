import { FaqSection } from "./faqStyle";
import imgQuestion from "../../../Assets/VectorQuest.svg";

function divDireita() {
  return (
    <FaqSection>
      <h1>Perguntas Frequentes</h1>

      <ul>
        <li>
          <img src={imgQuestion} alt="" />O que é a Ponte ?
        </li>
        <li>
          <img src={imgQuestion} alt="" />
          Quem pode utilizar a platafoma Ponte ?
        </li>
        <li>
          <img src={imgQuestion} alt="" />
          Quais são os benefícios de usar a Ponte ?
        </li>
        <li>
          <img src={imgQuestion} alt="" />
          Como a Ponte ajuda no desenvolvimento de crianças neuroatípicas ?
        </li>
        <li>
          <img src={imgQuestion} alt="" />
          Como posso começar a usar a Ponte ?
        </li>
      </ul>
    </FaqSection>
  );
}

export default divDireita;
