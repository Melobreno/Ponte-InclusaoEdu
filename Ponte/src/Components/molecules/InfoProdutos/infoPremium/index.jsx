import V from "../../../../Assets/V vetor.svg";
function InfoPremium() {
  return (
    <>
      <div className="contentInfo">
        <img src={V} alt="Imagem V" />
        <span>
          Contato prático e dinâmico com até 5 profissionais envolvidos
        </span>
      </div>
      <div className="contentInfo">
        <img src={V} alt="Imagem V" />
        <span>
          Mapeamento com todos os especialistas que sua criança precisa
        </span>
      </div>
      <div className="contentInfo">
        <img src={V} alt="Imagem X" />
        <span>Controle de Atividades Semanais</span>
      </div>
      <div className="contentInfo">
        <img src={V} alt="Imagem X" />
        <span>Fácil acesso aos Relatórios Clínicos</span>
      </div>
    </>
  );
}

export default InfoPremium;
