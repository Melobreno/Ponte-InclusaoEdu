import * as S from "./documentacao.style";
import SideDocumentacao from "../../Components/organisms/SideBarDocument/SideDocumentacao";
import Pesquisa from "../../Components/molecules/BarraPesquisa/index";
import fav from "../../Assets/PicFav.svg";
import pDF from "../../Assets/PicPDF.svg";
import nDoc from "../../Assets/newDoc.svg";
import { useRef, useState } from "react";
import api from "../../api/api";
function Documentacao() {
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

            // Envie o link e o nome para o backend
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
      const response = await api.get("/showdoc"); // Ajuste o endpoint conforme necessário
      setRecentDocuments(response.data); // Atualize o estado com os documentos recebidos
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };

  return (
    <>
      <Pesquisa />
      <S.Container>
        <SideDocumentacao />
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
                accept="image/*"
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
            <div className="containerFunc">
              <span>
                <img src={fav} alt="" />
              </span>
              <p>Visualizar Documentos Favoritos</p>
            </div>
          </S.Arquivos>
          <div>
            <div className="tituloh2">
              <h2>Documentos recentes</h2>
            </div>
            <S.Arquivos1>
              {recentDocuments.length > 0 ? (
                recentDocuments.map((file, index) => (
                  <div key={index} className="containerArquivos">
                    <p>
                      <a
                        href={file.url_doc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file.name_doc}
                      </a>
                      <span>{new Date().toLocaleTimeString()}</span>
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
