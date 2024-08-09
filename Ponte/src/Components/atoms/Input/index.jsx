import { useForm } from "react-hook-form";
import * as S from "./style";

function Entrada({ InputsCase, place }) {
  return (
    <S.inputs>
      <input type="text" place={"valor"} />
      <input type="text" place={"valor"} />
    </S.inputs>
  );
}
export default Entrada;
