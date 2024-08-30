import { useState } from "react";
import MetodoPgto from "../../atoms/CardPGTO/index";
import * as S from "./style";
import iconMais from "../../../Assets/+.svg";
import Btn from "../../atoms/Button";
import { Link, useNavigate } from "react-router-dom";

function Pagamento() {
  //Estados para armazenar
  const [cardNum, setCardNum] = useState("");
  const [dateVal, setDataVal] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCard = (e) => {
    e.preventDefault();
    if (!cardNum || !dateVal || !cvv || !name) {
      setMessage("Por favor, preencha todos os campos!");
      return;
    }
    console.log("Processando pagamento:");
    console.log("Número do Cartão:", cardNum);
    console.log("Data de Expiração:", dateVal);
    console.log("CVV:", cvv);
    console.log("Nome do Titular:", name);
    setMessage("Pagamento efetuado com sucesso!");
    navigate("/pgtoConfirmado");
  };

  return (
    <S.ContainerSec>
      <section className="sectionForma">
        <h1 className="tituloSec">Formas de Pagamento</h1>
        <div className="containerForma">
          <div className="contentFormaPagamento">
            <div className="precoAVista">
              <h3>Preço à vista: R$49,90</h3>
            </div>
            <div className="formasDePagamento">
              <MetodoPgto metPgto={"cartao"} />
              <form onSubmit={handleCard}>
                <div className="card">
                  <label htmlFor="">Número do cartão</label>
                  <input
                    type="text"
                    value={cardNum}
                    onChange={(e) => setCardNum(e.target.value)}
                    placeholder="0000 0000 0000 0000"
                  />

                  <label htmlFor="">Data de validade</label>
                  <input
                    type="text"
                    value={dateVal}
                    onChange={(e) => setDataVal(e.target.value)}
                    placeholder="MM/AA"
                  />

                  <label htmlFor="">CVV</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                  />

                  <label htmlFor="">Nome no cartão</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome Impresso no Cartão"
                  />
                </div>
              </form>
              <hr />
            </div>

            <div className="formasDePagamento">
              <p>Pix</p>
              <MetodoPgto metPgto={"pix"} />
              <hr />
            </div>
            <div className="formasDePagamento">
              <p>Boleto</p>
              <MetodoPgto metPgto={"boleto"} />
            </div>
          </div>
          <div className="contentResumo">
            <h3 className="tituloRes">Resumo do pedido</h3>

            <div className="contentItens">
              <p>Acesso Premium - 1 mês</p>
              <p>R$ 49,90</p>
            </div>
            <hr />
            <div className="contentDetalhes">
              <h3>Detalhes do pedido</h3>
              <ul>
                <li>
                  Contato prático e dinâmico com até 5 profissionais envolvidos
                </li>
                <li>
                  Mapeamento com todos os especialistas que sua criança precisa
                </li>
                <li>Controle de Atividades Semanais</li>
                <li>Fácil acesso aos Relatórios Clínicos</li>
              </ul>
            </div>
            <hr />
            <div className="contentTotal">
              <h3>Total do pedido:</h3>
              <h3>R$ 49,90</h3>
            </div>
            <div className="containerBtn">
              {message && <p>{message}</p>}
              <Btn txt={"Confirmar Compra"} onClick={handleCard} />
            </div>
          </div>
        </div>
      </section>
    </S.ContainerSec>
  );
}

export default Pagamento;
