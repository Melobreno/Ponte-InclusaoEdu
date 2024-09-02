import NavBar from "../../../Components/organisms/NavBar";
import FormRes from "../../../Components/molecules/Form Responsavel/index";
import Footer from "../../../Components/molecules/Footer/Footer";
import * as S from "./styles";
import SideDocumentacao from "../../../Components//organisms/SideBarDocument/SideDocumentacao";

function cadastroR() {
  return (
    <>
      <S.Container>
        <NavBar />
        <div className="side">
          <SideDocumentacao />
          <FormRes />
        </div>
        <Footer />
      </S.Container>
    </>
  );
}

export default cadastroR;
