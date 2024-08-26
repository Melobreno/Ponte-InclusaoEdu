const prisma = require("../../clientLib/prisma");

module.exports = class deleteMsgController {
  static async deleteMsg(req, res) {
    const { id } = req.params;

    try {
      console.log("Mensagem deletada:", id);
      const msgDel = await prisma.message.delete({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ message: "Documento apagado com sucesso!!", msgDel });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possivel apagar o Documento!!", error });
    }
  }
};
