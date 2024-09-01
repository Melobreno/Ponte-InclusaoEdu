const prisma = require("../../clientLib/prisma");

module.exports = class insertMsgController {
  static async insertMsg(req, res) {
    const { usuario, texto } = req.body;

    try {
      const insertTexto = await prisma.message.create({
        data: { usuario, texto },
      });
      return res
        .status(200)
        .json({ message: "Link Enviado com Sucesso", insertTexto });
    } catch (error) {
      return res.status(500).json({
        message: "Não foi possivel enviar o Link para o banco",
        error,
      });
    }
  }
};
