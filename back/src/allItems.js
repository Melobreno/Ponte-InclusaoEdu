const { text } = require("express");
const connection = require("./connection");

const getAllItems = async () => {
  try {
    const [query] = await connection.execute(
      "SELECT * FROM atividade_semanal.atividade"
    );
    return query;
  } catch (error) {
    throw new Error(`Erro ao buscar itens: ${error.message}`);
  }
};

const insertItem = async (texto) => {
  try {
    const insertQuery = "INSERT INTO atividade ( texto ) VALUES (?)";
    const values = [texto];
    const [result] = await connection.execute(insertQuery, values);
    return result;
  } catch (error) {
    throw new Error(`Erro ao inserir itens: ${error.message}`);
  }
};

const deleteItem = async (id) => {
  try {
    const deleteQuery = "DELETE FROM atividade WHERE id = ?";
    const valor = [id];
    const [resultado] = await connection.execute(deleteQuery, valor);
    return resultado;
  } catch (error) {
    throw new Error(`Erro ao excluir item: ${error.message}`);
  }
};

const updateItem = async (id, texto) => {
  try {
    const updateQuery = "UPDATE atividade SET texto = ? WHERE id = ?";
    const valor = [texto, id];
    const [resultado] = await connection.execute(updateQuery, valor);
    return resultado;
  } catch (error) {
    throw new Error(`Erro ao atualizar item ${error.message}`);
  }
};

module.exports = { getAllItems, insertItem, deleteItem, updateItem };
