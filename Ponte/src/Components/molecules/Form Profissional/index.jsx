import { useForm } from "react-hook-form";
import Btn from "../../atoms/Button";
import * as S from "./style";

function FormP() {
  const { register, handleSubmit } = useForm();
  function onSubmit(userData) {
    console.log(userData);
  }
  return (
    <S.FormSection>
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <h1>Cadastro</h1>
        <div className="formDiv">
          <label>
            Nome Completo:
            <input type="text" {...register("Nome")} />
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
            <input type="text" id="inputEmail" {...register("email")} />
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
            Cidade:
            <input type="text" id="" {...register("cidade")} />
          </label>
          <label>
            UF:
            <input type="text" id="inputUf" {...register("UF")} />
          </label>
          <label>
            Naturalidade:
            <input type="text" id="inputNat" {...register("UF")} />
          </label>
          <select
            name="selectSex"
            id="selectSex"
            {...register("sexo", { required: true })}
          >
            <option value="0">Select...</option>
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
          <Btn txt={"Cadastrar-se"} />
        </div>
      </form>
    </S.FormSection>
  );
}

export default FormP;
