import { useForm } from "react-hook-form";
import Btn from "../../atoms/Button";
import * as S from "./style";
import { Link } from "react-router-dom";

function FormP() {
  const userName = localStorage.getItem("usuario");
  const userEmail = localStorage.getItem("email");
  const { register, handleSubmit, setValue } = useForm();
  function onSubmit(userData) {
    console.log(userData);
  }
  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
      });
  };

  return (
    <S.FormSection>
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <h1>Atualizar cadastro do profissional</h1>
        <div className="formDiv">
          <label>
            Nome Completo:
            <input type="text" {...register("Nome")} value={userName} />
          </label>

          <label>
            CPF:
            <input
              type="text"
              placeholder="Insira seu CPF"
              {...register("cpf")}
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              id="inputEmail"
              {...register("email")}
              value={userEmail}
            />
          </label>
          <label>
            Data de Nascimento:
            <input type="text" id="inputData" {...register("nasc")} />
          </label>
          <label>
            Telefone para contato:
            <input type="text" id="inputCont" {...register("contato")} />
          </label>

          <label>
            Cep:
            <input
              type="text"
              id="cep"
              placeholder="Apenas números"
              {...register("cep")}
              onBlur={checkCep}
            />
          </label>

          <label>
            Bairro:
            <input type="text" id="inputUf" {...register("bairro")} />
          </label>
          <label>
            Cidade:
            <input type="text" id="cidade" {...register("cidade")} />
          </label>
          <select
            name="selectSex"
            id="selectSex"
            {...register("sexo", { required: true })}
          >
            <option value="0">Sexo:</option>
            <option value="Masc">Masculino</option>
            <option value="Fem">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
          <label>
            Nº de cadastro do Profissional:
            <input
              type="text"
              id="inputCadastro"
              {...register("Cadastro Prof")}
            />
          </label>

          <label>
            Crie uma Senha:
            <input type="text" id="inputSenha" {...register("CrieSenha")} />
          </label>
          <label htmlFor="">
            Digite a senha novamente:
            <input
              type="text"
              id="inputSenhaNov"
              {...register("confirmSenha")}
            />
          </label>
        </div>
        <div className="containerBtn">
          <Btn txt={"Enviar"} />
        </div>
        <p className="cadastroResp">
          Precisa criar um cadastro para Responsável ?{" "}
          <Link to={"/cadastroResp"}>
            <span>Clique aqui</span>
          </Link>
        </p>
      </form>
    </S.FormSection>
  );
}

export default FormP;
