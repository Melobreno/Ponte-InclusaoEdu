const prisma = require("../../clientLib/prisma");

module.exports = class showMsgController {
  static async showMsg(req, res) {
    try {
      const resMsg = await prisma.message.findMany();
      res.status(200).json(resMsg);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar itens" });
    }
  }
};
