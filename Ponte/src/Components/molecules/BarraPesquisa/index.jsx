import { Section } from "./style";
import logo from "../../../Assets/logoPonte.svg";
import menu from "../../../Assets/botaoSideBar.svg";
import avatar from "../../../Assets/Avatar 1.svg";
import InputNav from "../../atoms/inputNav";
function Pesquisa() {
  return (
    <>
      <Section>
        <div className="esquerdaNav">
          <a href="">
            <img src={menu} alt="" />
          </a>

          <div className="inputNav">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>

        <div className="direitaNav">
          <InputNav />
          <p>Lucas Melo</p>
          <img src={avatar} alt="" className="avatar" />
        </div>
      </Section>
    </>
  );
}
export default Pesquisa;
