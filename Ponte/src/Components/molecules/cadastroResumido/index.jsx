import FormResumido from "../../atoms/FormularioResumido";
import VetorCadastro from "../../../Assets/vetor-cadastro.svg";
import { Container } from "./style";
import { Surgir } from "../../motion/index";

function mainCadastro() {
  return (
    <Container>
      <Surgir>
        <div>
          <img src={VetorCadastro} alt="" />
        </div>
      </Surgir>

      <FormResumido />
    </Container>
  );
}

export default mainCadastro;
