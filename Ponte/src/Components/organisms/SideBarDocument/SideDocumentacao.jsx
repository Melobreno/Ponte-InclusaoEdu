import img from "../../../Assets/Group.svg";
import * as S from "./SideDocument.style";
import { IoHomeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscFile } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function handleLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("conta");
  localStorage.removeItem("usuario");
  localStorage.removeItem("email");
  window.location.reload();
}
const tipo_conta = localStorage.getItem("conta");
const nomeUsuario = localStorage.getItem("usuario");

function SideDocumentacao() {
  return (
    <>
      <S.nav>
        <div id="sidebar-container">
          <div id="usuario">
            <img src={img} alt="avatar" id="avatar" />

            <p id="infor-usuario">
              <span className="item-descricao">{nomeUsuario}</span>
              <span className="item-descricao">conta: {tipo_conta}</span>
            </p>
          </div>
          <ul id="ul_items">
            <li className="side-item">
              <Link to="/feed">
                <IoHomeOutline />
                <span className="item-descricao">Página principal</span>
              </Link>
            </li>

            <li className="side-item">
              <Link
                to={
                  tipo_conta === "responsavel"
                    ? "/atividaderesp"
                    : "/atividades"
                }
              >
                <VscFile />
                <span className="item-descricao">Atividades</span>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/Chat">
                <IoChatbubbleEllipsesOutline />
                <span className="item-descricao">Chat</span>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/Doc">
                <IoFolderOpenOutline />
                <span className="item-descricao">Documentos</span>
              </Link>
            </li>

            <li className="side-item">
              <Link to="/Profissionais">
                <MdPersonAddAlt />
                <span className="item-descricao">Profissionais</span>
              </Link>
            </li>

            <li className="side-item">
              <Link to="/mapeamento">
                <GoPeople />
                <span className="item-descricao">Mapeamento</span>
              </Link>
            </li>

            <li className="side-item">
              <Link to="/CadastroProf">
                <IoSettingsOutline />
                <span className="item-descricao">Atualização de cadastro</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="sair">
          <button className="sair-btn" onClick={handleLogout}>
            <CiLogout />
            <span className="item-descricao">Sair</span>
          </button>
        </div>
      </S.nav>
    </>
  );
}
export default SideDocumentacao;
