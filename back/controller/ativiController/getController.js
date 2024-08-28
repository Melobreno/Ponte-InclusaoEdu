const prisma = require("../../clientLib/prisma");

module.exports = class getController {
  static async getAtivi(req, res) {
    try {
      const ativi = await prisma.atividade.findMany();
      res.status(200).json(ativi);
    } catch (error) {
      res.status(500).json({ error: " Erro ao bucar itens" });
    }
  }
};
