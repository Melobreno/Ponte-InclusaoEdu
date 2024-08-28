const prisma = require("../../clientLib/prisma");

module.exports = class showCepController {
  static async showCep(req, res) {
    const { cidade } = req.params;
    try {
      const res_cidade = await prisma.profissionais.findMany({
        where: { cidade: cidade },
      });
      res.status(200).json(res_cidade);
    } catch (error) {
      res.status(500).json({ error: "Não foi possível realizar sua busca." });
    }
  }
};
