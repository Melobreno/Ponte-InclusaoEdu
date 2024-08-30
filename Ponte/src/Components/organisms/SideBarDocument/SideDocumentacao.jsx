import img from "../../../Assets/Group.svg";
import * as S from "./SideDocument.style";
import { IoHomeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscFile } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoFolderOpenOutline } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";

function handleLogout() {
  localStorage.removeItem("token");
  window.location.reload();
}
function SideDocumentacao() {
  return (
    <>
      <S.nav>
        <div id="sidebar-container">
          <div id="usuario">
            <img src={img} alt="avatar" id="avatar" />

            <p id="infor-usuario">
              <span className="item-descricao">Lucas Melo</span>
              <span className="item-descricao">Terapeuta</span>
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
              <Link to="/mapeamento">
                <GoPeople />
                <span className="item-descricao">Profissionais</span>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/atividades">
                <VscFile />
                <span className="item-descricao">Mural</span>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/Doc">
                <IoFolderOpenOutline />
                <span className="item-descricao">Documentos</span>
              </Link>
            </li>
            <li className="side-item">
              <Link to="/Chat">
                <IoChatbubbleEllipsesOutline />
                <span className="item-descricao">Chat</span>
              </Link>
            </li>

            <li className="side-item">
              <Link to="/CadastroProf">
                <IoSettingsOutline />
                <span className="item-descricao">atualização de cadastro</span>
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
