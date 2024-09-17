import { Section } from "./style";
import logo from "../../../assets/logoPonte.svg";
import avatar from "../../../assets/Avatar 1.svg";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Pesquisa() {
  const nameUser = localStorage.getItem("usuario");
  const primNome = nameUser.split(" ")[0];
  return (
    <>
      <Section>
        <div className="inputNav">
          <Link to={"/"}>
            <a>
              <img src={logo} alt="logo" className="logo" />
            </a>
          </Link>
        </div>

        <div className="direitaNav">
          <Link to={"/feed"} className="linkHome">
            <IoHomeOutline />
            <p>Início</p>
          </Link>

          <p className="userName">{primNome}</p>
          <img src={avatar} alt="avata" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
