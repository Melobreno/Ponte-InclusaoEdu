const connection = require("./connection");

const getItems = async () => {
  try {
    const [query] = await connection.execute("SELECT * FROM feed_db.messages;");
    return query;
  } catch (error) {
    throw new Error(`Erro ao buscar itens: ${error.message}`);
  }
};

const insertItem = async (texto) => {
  try {
    const insertQuery = "INSERT INTO messages (texto) VALUES (?)";
    const values = [texto];

    const [result] = await connection.execute(insertQuery, values);
    return result;
  } catch (error) {
    throw new Error(`Erro ao inserir item: ${error.message}`);
  }
};

const deleteItem = async (id) => {
  try {
    const deleteQuery = "DELETE FROM messages WHERE id = ?";
    const values = [id];
    const [result] = await connection.execute(deleteQuery, values);
    return result;
  } catch (error) {
    throw new Error(`Erro ao excluir item: ${error.message}`);
  }
};

module.exports = { getItems, insertItem, deleteItem };
