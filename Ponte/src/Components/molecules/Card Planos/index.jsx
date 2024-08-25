import Btn from "../../atoms/Button";
import InfoPremium from "../InfoProdutos/infoPremium";
import InfoBasic from "../InfoProdutos/infoBasic";
import * as S from "./style";
import { Link } from "react-router-dom";

function Card({ nomeProp }) {
  const valorAssinatura = nomeProp === "Premium" ? "49,90" : "00,00";
  const titleCard = nomeProp === "Premium" ? "Premium" : "Basic";
  const infoCard = nomeProp === "Premium" ? <InfoPremium /> : <InfoBasic />;
  const toPayment = nomeProp === "Premium" ? "/Pagamento" : "/Pagamento";
  return (
    <>
      <S.cardSection nomeProp={nomeProp}>
        <div className="cardHeader">
          <h2>{titleCard}</h2>
        </div>

        <div className="containerInform">
          <div className="containerValue">
            <h2>R$ {valorAssinatura}</h2>
          </div>

          <div className="productInfo">{infoCard}</div>
          <div>
            <Link to={toPayment}>
              <Btn txt={"Assinar plano"} />
            </Link>
          </div>
        </div>
      </S.cardSection>
    </>
  );
}

export default Card;
