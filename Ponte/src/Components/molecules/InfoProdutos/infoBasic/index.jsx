import X from "../../../../Assets/X vetor.svg";
import V from "../../../../Assets/V vetor.svg";
function InfoBasic() {
  return (
    <>
      <div className="contentInfo">
        <img src={V} alt="Imagem V" />
        <span>Informção do produto</span>
      </div>
      <div className="contentInfo">
        <img src={V} alt="Imagem V" />
        <span>Informção do produto</span>
      </div>
      <div className="contentInfo">
        <img src={X} alt="Imagem X" />
        <span>Informção do produto</span>
      </div>
      <div className="contentInfo">
        <img src={X} alt="Imagem X" />
        <span>Informção do produto</span>
      </div>
    </>
  );
}

export default InfoBasic;
