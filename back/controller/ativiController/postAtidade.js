const prisma = require("../../clientLib/prisma");
module.exports = class postAtividade {
  static async ativiPost(req, res) {
    const { texto } = req.body;
    try {
      const response = await prisma.atividade.create({
        data: { texto },
      });
      return res
        .status(200)
        .json({ message: "Atividade enviada com sucesso", response });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "não foi possivel enviar a atividade", error });
    }
  }
};
