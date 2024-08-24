import { Section } from "./style";
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import logo from "../../../Assets/logoPonte.svg";
import avatar from "../../../Assets/Avatar 1.svg";
import lupa from "../../../Assets/lupa.svg";
import { useState } from "react";
import { CiPower } from "react-icons/ci";
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
        <div className="esquerdaNav">
          <div className="inputNav">
            <a href="">
              <img src={logo} alt="logo" className="logo" />
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
          <p>Lucas Melo</p>
          <img src={avatar} alt="avata" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
