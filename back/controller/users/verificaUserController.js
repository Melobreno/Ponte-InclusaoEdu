const prisma = require("../../clientLib/prisma");

module.exports = class verificaEmailController {
  static async verificaEmail(req, res) {
    const { email } = req.query;

    try {
      const user = await prisma.users.findFirst({
        where: { email_user: email },
      });

      if (user) {
        return res.status(200).json({ existe: true });
      } else {
        return res.status(404).json({ existe: false });
      }
    } catch (error) {
      console.error("Erro ao verificar email:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
};
