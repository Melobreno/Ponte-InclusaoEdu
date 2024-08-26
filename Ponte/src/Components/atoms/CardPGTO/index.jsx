import iconCard from "../../../Assets/icon _credit.svg";
import iconBarras from "../../../Assets/icon _barcode.svg";
import iconPix from "../../../Assets/logo-pix-solid.svg";
import * as S from "./styles";

function MetodoPgto({ metPgto }) {
  const imgIcon =
    metPgto === "cartao"
      ? iconCard
      : metPgto === "boleto"
      ? iconBarras
      : iconPix;

  const txtMet =
    metPgto === "cartao"
      ? "Cartão de Crédito"
      : metPgto === "boleto"
      ? "Boleto Bancário"
      : "Pague com Pix";

  const mostrarSelect = imgIcon === iconBarras; // Condicional para fazer o Select desaparecer
  return (
    <S.ContainerOpt>
      <div className="contentInfo">
        <input type="radio" id="mtPgto" name="mtPgto" />
        <img
          src={imgIcon}
          alt="Icone do Metodo de Pagamento"
          className="iconImg"
        />
        <span>{txtMet}</span>
      </div>
      <div className="contentParc">
        {/* {!mostrarSelect && (
          <select name="" id="">
            <option value="*">Preço à vista</option>
          </select>
        )} */}
      </div>
    </S.ContainerOpt>
  );
}

export default MetodoPgto;
