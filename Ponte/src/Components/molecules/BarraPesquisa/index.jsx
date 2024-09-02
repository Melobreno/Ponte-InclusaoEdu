import { Section } from "./style";
import logo from "../../../Assets/logoPonte.svg";
import avatar from "../../../Assets/Avatar 1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Pesquisa({ setOpenSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const usuarioLog = localStorage.getItem("usuario");

  const abrirSidebar = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    setOpenSidebar(newIsOpen);
  };
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
          <p className="userName">{usuarioLog}</p>
          <img src={avatar} alt="avata" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
