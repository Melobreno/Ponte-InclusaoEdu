const connection = require("./connection");
// const bcrypt = require("bcrypt"); // Bib que criptografa a senha
// const saltRounds = 10; // Quantas vezes a senha vai ser embaralhada

const getUsuario = async () => {
  try {
    const queryItens = "SELECT * FROM Usuario";
    const [query] = await connection.query(queryItens);
    return query;
  } catch (error) {
    console.log(`Não foi possivel retornar os itens ${error}`);
  }
};

const insertUsuario = async (nome, email, senha) => {
  try {
    // const password = Usuario.senha;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hash = bcrypt.hashSync(password, salt); // Encriptando a senha inserida
    const queryInsert =
      "INSERT INTO Usuario (nome, email, senha) values (?, ?, ?);";
    const values = [nome, email, senha];
    const query = await connection.execute(queryInsert, values);
    return query;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      throw new Error("Este e-mail já está cadastrado.");
    } else {
      throw new Error(`Erro ao salvar o usuário: ${error.message}`);
    }
  }
};

const updateUsuario = async (nome, email, senha, id_usuario) => {
  try {
    const queryUpdate =
      "UPDATE Usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?;";
    const values = [nome, email, senha, id_usuario];
    const [query] = await connection.execute(queryUpdate, values);
    return query;
  } catch (error) {
    throw new Error(`Não foi possivel atualizar o usuario: ${error.message}`);
  }
};

const deleteUsuario = async (id_usuario) => {
  try {
    const queryDelete = "DELETE FROM Usuario WHERE id_usuario = ?;";
    const values = [id_usuario];
    const query = await connection.execute(queryDelete, values);
    return query;
  } catch (error) {
    throw new Error(`Erro ao deletar o usuario: ${error.message}`);
  }
};

module.exports = { getUsuario, insertUsuario, updateUsuario, deleteUsuario };
