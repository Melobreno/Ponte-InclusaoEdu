const prisma = require("../../clientLib/prisma");

module.exports = class showDocController {
  static async showDoc(req, res) {
    try {
      const docs = await prisma.documents.findMany();
      res.status(200).json(docs);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar itens" });
    }
  }
};
