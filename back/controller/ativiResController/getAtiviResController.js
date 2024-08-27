const prisma = require("../../clientLib/prisma");

module.exports = class getController {
  static async getAtiviRes(req, res) {
    try {
      const ativiRes = await prisma.atividade.findMany();
      res.status(200).json(ativiRes);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar itens" });
    }
  }
};
