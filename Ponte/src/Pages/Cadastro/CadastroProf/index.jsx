import Footer from "../../../Components/molecules/Footer/Footer";
import NavBar from "../../../Components/organisms/NavBar";
import FormProf from "../../../Components/molecules/Form Profissional";
import * as S from "./styles";
import SideDocumentacao from "../../../Components//organisms/SideBarDocument/SideDocumentacao";

function CadastroP() {
  return (
    <>
      <S.Container>
        <NavBar />
        <div className="side">
          <SideDocumentacao />
          <FormProf />
        </div>
        <Footer />
      </S.Container>
    </>
  );
}

export default CadastroP;
