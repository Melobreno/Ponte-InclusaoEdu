const prisma = require("../../clientLib/prisma");

module.exports = class putController {
  static async atualizaAtivi(req, res) {
    const { id_ativi } = req.params;
    try {
      const atualizarAtivi = await prisma.atividade.update({
        where: { id_ativi },
      });
      return res
        .status(200)
        .json({ message: "atividade atualizada com sucesso", atualizarAtivi });
    } catch (error) {
      return res
        .status(200)
        .json({ message: "atividade atualizada com sucesso", error });
    }
  }
};
