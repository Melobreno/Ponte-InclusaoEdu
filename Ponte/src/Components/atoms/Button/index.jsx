import * as S from "./buttonStyle";
function btn({ txt }) {
  return (
    <>
      <S.Container type="submit">{txt}</S.Container>
    </>
  );
}

export default btn;
