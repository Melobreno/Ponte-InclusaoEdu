const prisma = require("../../clientLib/prisma");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = class insertUserController {
  static async insertUser(req, res) {
    const { name_user, email_user, password_user, conta } = req.body;

    if (!name_user || !email_user || !password_user) {
      return res.status(500).json({ message: "Os Campos são obrigatórios!" });
    }

    try {
      const handlePassword = password_user;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(handlePassword, salt);
      const users = await prisma.users.create({
        data: {
          name_user,
          email_user,
          password_user: hash,
          conta,
        },
      });
      return res
        .status(200)
        .json({ message: "Usuário cadastrado com sucesso!", users });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possivel realizar o cadastro", error });
    }
  }
};
