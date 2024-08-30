import { Section } from "./style";
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../../Assets/logoPonte.svg";
import avatar from "../../../Assets/Avatar 1.svg";
import lupa from "../../../Assets/lupa.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Pesquisa({ setOpenSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  const abrirSidebar = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    setOpenSidebar(newIsOpen);
  };

  return (
    <>
      <Section>
        <div className="esquerdaNav">
          <div>
            {isOpen ? (
              <RiCloseFill
                onClick={abrirSidebar}
                className="menu"
                fontSize={25}
              />
            ) : (
              <FiAlignJustify
                onClick={abrirSidebar}
                fontSize={25}
                className="menu"
              />
            )}
          </div>
          <div className="inputNav">
            <a href="">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </a>
          </div>
        </div>

        <div className="direitaNav">
          <div className="pesquisa">
            <input
              type="text"
              placeholder="O que  você está procurando?"
              className="lupa"
            />
            <button className="">
              <img src={lupa} alt="lupa" />
            </button>
          </div>
          <p className="userName">Lucas Melo</p>
          <img src={avatar} alt="avata" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
