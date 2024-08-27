const prisma = require("../../clientLib/prisma");

module.exports = class deleteController {
  static async deletarAtivi(req, res) {
    const { id_ativi } = req.params;
    try {
      console.log("name_doc recebido:", id_ativi);
      const resposta = await prisma.atividade.delete({
        where: { id_ativi: Number(id_ativi) },
      });
      return res
        .status(200)
        .json({ message: "Atividade apagada com sucesso", resposta });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "erro ao deletar atividade", error });
    }
  }
};
