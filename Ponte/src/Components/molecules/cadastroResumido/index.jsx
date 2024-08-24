import FormResumido from "../../atoms/FormularioResumido";
import VetorCadastro from "../../../Assets/vetor-cadastro.svg";
import { Container } from "./style";

function mainCadastro() {
  return (
    <Container>
      <div>
        <img src={VetorCadastro} alt="" />
      </div>
      <FormResumido />
    </Container>
  );
}

export default mainCadastro;
