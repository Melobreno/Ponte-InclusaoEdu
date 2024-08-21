const express = require("express");

const cors = require("cors");
const app = express();

const {
  getAllItems,
  insertItem,
  deleteItem,
  updateItem,
} = require("./allItems");

app.use(express.json());
app.use(cors());

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const items = await getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/insertItem", async (req, res) => {
  const { texto } = req.body;
  try {
    const insertQuery = await insertItem(texto);
    res.status(200).json(insertQuery);
  } catch (error) {
    res.status(508).json({ error: error.message });
  }
});

app.delete("/deleteItem/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const resultado = await deleteItem(id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/updateItem/:id", async (req, res) => {
  const { id } = req.params;
  const { texto } = req.body;
  try {
    const resultado = await updateItem(id, texto);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.messagea });
  }
});
