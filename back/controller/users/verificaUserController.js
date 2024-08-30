const prisma = require("../../clientLib/prisma");

module.exports = class verificaEmailController {
  static async verificaEmail(req, res) {
    const { email_user } = req.params;

    try {
      const user = await prisma.users.findFirst({
        where: { email_user: email_user },
      });

      if (user) {
        return res.status(200).json({ exists: true });
      } else {
        return res.status(404).json({ exists: false });
      }
    } catch (error) {
      console.error("Erro ao verificar email:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
};
