import Btn from "../../../Components/atoms/Button";
import { Section } from "./style";
import img from "../../../Assets/pgtoFeito.svg";
import NavBar from "../../../Components/organisms/NavBar";
import Footer from "../../../Components/molecules/Footer/Footer";

import { Link } from "react-router-dom";

function PgtoConfirmado() {
  const enviar = "Continuar";
  return (
    <>
      <NavBar />
      <Section>
        <div className="pgto">
          <img src={img} alt="" />
          <div className="botao">
            <Link to={"/login"}>
              <Btn txt={enviar} />
            </Link>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default PgtoConfirmado;
