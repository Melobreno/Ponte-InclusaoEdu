const express = require("express");
const cors = require("cors");
const AppRoutes = require("./routes");
const PORT = 3003;

const app = express();

app.use(express.json());
app.use(cors());

app.use(AppRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na Porta ${PORT}`);
});
