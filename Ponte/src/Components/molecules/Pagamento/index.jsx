import MetodoPgto from "../../atoms/CardPGTO/index";
import * as S from "./style";
import iconMais from "../../../Assets/+.svg";
import Btn from "../../atoms/Button";

function Pagamento() {
  return (
    <S.ContainerSec>
      <section className="sectionForma">
        <h1 className="tituloSec">Formas de Pagamento</h1>
        <div className="containerForma">
          <div className="contentFormaPagamento">
            <div className="formasDePagamento">
              <p>Cartão de Crédito</p>
              <MetodoPgto metPgto={"cartao"} />
              <MetodoPgto metPgto={"cartao"} />
              <a href="#">
                <img src={iconMais} alt="" />
                Adicionar um novo Cartão
              </a>
            </div>
            <hr />
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
            <p>Itens:</p>
            <div className="contentItens">
              <p>Acesso Premium - 1 mês</p>
              <p>R$ 44,90</p>
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
              <h3>R$ 44,90</h3>
            </div>
            <div className="containerBtn">
              <Btn txt={"Confirmar Compra"} />
            </div>
          </div>
        </div>
      </section>
    </S.ContainerSec>
  );
}

export default Pagamento;
