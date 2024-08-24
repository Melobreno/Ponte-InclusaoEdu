import img from "../../../Assets/Group.svg";
import * as S from "./SideDocument.style";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { VscFile } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoFolderOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <ul id="saide_items">
            <li className="saide-item">
              <Link to="/">
                <IoHomeOutline />
                <span className="item-descricao">Página principal</span>
              </Link>
            </li>
            <li className="saide-item active">
              <Link to="/feed">
                <AiOutlineLineChart />
                <span className="item-descricao">Acompanhamento</span>
              </Link>
            </li>
            <li className="saide-item">
              <Link to="/captacao">
                <GoPeople />
                <span className="item-descricao">Profissionais</span>
              </Link>
            </li>
            <li className="saide-item">
              <Link to="/feed">
                <VscFile />
                <span className="item-descricao">Mural</span>
              </Link>
            </li>
            <li className="saide-item">
              <Link to="/Doc">
                <IoFolderOpenOutline />
                <span className="item-descricao">Pasta de documentos</span>
              </Link>
            </li>
            <li className="saide-item">
              <Link to="/Doc">
                <IoChatbubbleEllipsesOutline />
                <span className="item-descricao">Chat</span>
              </Link>
            </li>

            <li className="saide-item">
              <Link to="/Doc">
                <IoSettingsOutline />
                <span className="item-descricao">Configuração</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <div id="sair">
            <button className="sair-btn">
              <CiLogout />
              <span className="item-descricao">Sair</span>
            </button>
          </div>
        </Link>
      </S.nav>
    </>
  );
}
export default SideDocumentacao;