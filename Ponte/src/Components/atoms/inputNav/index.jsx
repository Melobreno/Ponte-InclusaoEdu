import lupa from "../../../Assets/lupa.svg";
import { Container } from "./style";

function InputNav() {
  return (
    <Container className="pesquisa">
      <input
        type="text"
        placeholder="O que  você está procurando?"
        className="lupa"
      />
      <button className="">
        <img src={lupa} alt="" />
      </button>
    </Container>
  );
}

export default InputNav;
