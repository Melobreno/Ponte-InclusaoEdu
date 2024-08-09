import Card from "../../molecules/Card Planos";
import * as S from "./styles";

function Planos() {
  return (
    <S.Section>
      <Card nomeProp={"Basic"} />
      <Card nomeProp={"Premium"} />
    </S.Section>
  );
}

export default Planos;
