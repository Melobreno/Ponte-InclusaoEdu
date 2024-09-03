import { useForm } from "react-hook-form";
import Btn from "../../atoms/Button";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";

function FormR() {
  const nav = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  function onSubmit(userData) {
    console.log(userData);
    nav("/Assinaturas");
  }
  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
      });
  };

  return (
    <S.FormSection>
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <h1>Atualizar cadastro do Responsáveis</h1>
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
            <input type="text" id="bairro" {...register("bairro")} />
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
        </div>
        <div className="containerBtn">
          <Btn txt={"Enviar"} />
        </div>

        <p className="cadastroProf">
          Precisa criar um cadastro Profissional ?{" "}
          <Link to={"/cadastroProf"}>
            <span>Clique aqui</span>
          </Link>
        </p>
      </form>
    </S.FormSection>
  );
}

export default FormR;
