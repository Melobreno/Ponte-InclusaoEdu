import QuestImg from "../../../Assets/dudeQuest.svg";
import DivDireita from "../../molecules/FAQ/divDireita";
import * as S from "./faqStyle";

function Faq() {
  return (
    <>
      <S.Sect id="contato">
        <div className="ContainerContent">{/* Vetores */}</div>

        <div className="divEsq">
          <img src={QuestImg} alt="" />
        </div>
        <div className="divDir">
          <DivDireita />
        </div>
      </S.Sect>
    </>
  );
}

export default Faq;
