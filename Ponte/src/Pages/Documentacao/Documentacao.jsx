import * as S from "./documentacao.style";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import pDF from "../../Assets/PicPDF.svg";
import lixeira from "../../Assets/lixeira.svg";
import nDoc from "../../Assets/newDoc.svg";
import { useRef, useState, useEffect, useDeferredValue } from "react";
import api from "../../api/api";
function Documentacao() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  const [recentDocuments, setRecentDocuments] = useState([]);
  const fileInputRef = useRef(null);

  const url =
    "https://script.google.com/macros/s/AKfycbzV7eJn2hUrzk0UGiDFLJk3RoOvf8ji0EWrxXThyOZySw0iKbmNNWh4weVietU8f199Ow/exec"; // Url do Script criado com App Script
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fr = new FileReader();
      fr.onloadend = async () => {
        const res = fr.result;
        const spt = res.split("base64,")[1];
        const obj = {
          base64: spt,
          type: file.type,
          name: file.name,
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(obj),
          });
          const link = await response.text();
          console.log("Arquivo enviado:", link);

          if (link) {
            setUploadedFiles((prevFiles) => [
              ...prevFiles,
              { name: file.name, link },
            ]);

            await fetchUploadedFiles(file.name, link);
          }
        } catch (error) {
          console.error("Erro ao enviar o arquivo:", error);
        }
      };
      fr.readAsDataURL(file);
    }
  };

  const activeFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const fetchUploadedFiles = async (name, link) => {
    try {
      console.log(`Enviando name: ${name} Link: ${link}`);

      const response = await api.post("/enviarlink", {
        name_doc: name,
        url_doc: link,
      });

      console.log("Link enviado com sucesso:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar o link:", error);
    }
  };

  const handleShowAllDocuments = async () => {
    setShowAllDocuments(true);
    try {
      const response = await api.get("/showdoc");
      setRecentDocuments(response.data);
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };
  //encodeURIComponent -> Garante que o valor passado continue com espaços e/ou caracteres especiais
  const deleteDoc = async (name_doc) => {
    try {
      await api.delete(`/deletedoc/${encodeURIComponent(name_doc)}`);
      handleShowAllDocuments();
    } catch (error) {
      console.error("Erro ao deletar documento:", error);
    }
  };

  useEffect(() => {
    handleShowAllDocuments();
  }, []);

  return (
    <>
      <Pesquisa setOpenSidebar={setOpenSideBar} />

      <S.Container>
        <div>{openSideBar && <SideDocumentacao />}</div>
        <S.Bloco>
          <div className="tituloh2">
            <h2>Documentos da Criança</h2>
          </div>
          <S.Arquivos>
            <div className="containerFunc">
              <span>
                <img src={nDoc} alt="" />
              </span>
              <p onClick={activeFileInput} style={{ cursor: "pointer" }}>
                Adicionar um novo Documento
              </p>
              <input
                type="file"
                name=""
                id=""
                accept="*/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </div>
            <div className="containerFunc">
              <span>
                <img src={pDF} alt="" />
              </span>
              <p onClick={handleShowAllDocuments} style={{ cursor: "pointer" }}>
                Visualizar Todos os Documentos
              </p>
            </div>
          </S.Arquivos>
          <div>
            <div className="tituloh2">
              {showAllDocuments ? (
                <h2>Todos os Documentos</h2>
              ) : (
                <h2>Documentos recentes</h2>
              )}
            </div>
            <S.Arquivos1>
              {recentDocuments.length > 0 ? (
                recentDocuments.map((file, index) => (
                  <div key={index} className="containerArquivos">
                    <p>
                      <a
                        href={file.url_doc}
                        target="_blank"
                        rel="noopener noreferrer" // Essa linha garante a segurança ao abrir o link externo
                      >
                        {file.name_doc}
                      </a>
                      <span className="timeDelete">
                        {`${new Date().toLocaleDateString()}`}{" "}
                        <span>
                          <img
                            src={lixeira}
                            alt=""
                            onClick={() => deleteDoc(file.name_doc)}
                          />
                        </span>
                      </span>
                    </p>
                  </div>
                ))
              ) : (
                <p className="msgSemArquivo">Nenhum arquivo enviado ainda</p>
              )}
            </S.Arquivos1>
          </div>
        </S.Bloco>
      </S.Container>
    </>
  );
}
export default Documentacao;
