const express = require("express");
const cors = require("cors");
const app = express();

const {
  getUsuario,
  insertUsuario,
  updateUsuario,
  deleteUsuario,
} = require("./allItems");
const { resume } = require("./connection");

app.use(express.json());
app.use(cors());

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const item = await getUsuario();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

app.post("/adicionar", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const result = await insertUsuario(nome, email, senha);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

app.put("/up/:id_usuario", async (req, res) => {
  const { id_usuario } = req.params;
  const { nome, email, senha } = req.body;

  try {
    const result = await updateUsuario(nome, email, senha, id_usuario);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/delete/:id_usuario", async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const result = await deleteUsuario(id_usuario);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
