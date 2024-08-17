const express = require("express");
const cors = require("cors");

const { getItems, insertItem } = require("./allItems");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Funcionando na porta ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const items = await getItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/insertItem", async (req, res) => {
  const { texto } = req.body;
  try {
    const result = await insertItem(texto);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
