import * as S from "./buttonStyle";
function btn({ txt, onClick }) {
  return (
    <>
      <S.Container onClick={onClick} type="submit">
        {txt}
      </S.Container>
    </>
  );
}

export default btn;
