const prisma = require("../../clientLib/prisma");
const bcrypt = require("bcrypt");

module.exports = class updateUserController {
  static async updateUser(req, res) {
    const { email_user, password_user } = req.body;

    try {
      const user = await prisma.users.findFirst({
        where: { email_user: email_user },
      });

      if (!user) {
        return res.status(400).json({ message: "Usuario não encontrado" });
      }

      const hash = await bcrypt.hash(password_user, 10);
      await prisma.users.update({
        where: { email_user: email_user },
        data: { password_user: hash },
      });
      return res.status(200).json({ message: "Senha atualizada com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar a senha do usuário:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
};
