const prisma = require("../../clientLib/prisma");

module.exports = class putController {
  static async atualizaAtivi(req, res) {
    const { id_ativi } = req.params;
    const { texto } = req.body;
    try {
      const atualizarAtivi = await prisma.atividade.update({
        where: { id_ativi: Number(id_ativi) },
        data: { texto },
      });
      return res
        .status(200)
        .json({ message: "atividade atualizada com sucesso", atualizarAtivi });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possivel atualizar a atividade", error });
    }
  }
};
