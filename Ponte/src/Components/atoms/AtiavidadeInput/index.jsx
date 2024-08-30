import { useState } from "react";

function AtividadeInput({ capEvent }) {
  const [valor, setvalor] = useState([]);

  const mudacaInput = (event) => {
    const novovalor = event.target.value;
    setvalor(novoValor);
    capEvent(novovalor);
  };
  return (
    <section>
      <input
        className="digite"
        type="text"
        name=""
        id=""
        placeholder="Digite aqui sua proposta de atividade semanal..."
        onChange={mudacaInput}
        valor={valor}
      />
    </section>
  );
}
export default AtividadeInput;
