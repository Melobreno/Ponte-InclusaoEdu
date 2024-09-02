import { Section } from "./style";
import logo from "../../../Assets/logoPonte.svg";
import avatar from "../../../Assets/Avatar 1.svg";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Pesquisa() {
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

          <p className="userName">Lucas Melo</p>
          <img src={avatar} alt="avata" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
