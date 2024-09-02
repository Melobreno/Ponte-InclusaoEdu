const prisma = require("../../clientLib/prisma");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const chaveSec = "ponte_key";

module.exports = class loginUserController {
  static async loginUser(req, res) {
    const { email_user, password_user, id_user } = req.body;
    const users = await prisma.users.findFirst({
      where: { email_user: email_user },
    });
    if (!users) {
      return res
        .status(500)
        .json({ message: "Não foi possivel encontrar o email informado" });
    }
    const passwordValid = await bcrypt.compare(
      password_user,
      users.password_user
    );
    if (!passwordValid) {
      return res.status(401).json({ message: "Senha incorreta!" });
    }
    try {
      const token = jwt.sign(
        {
          id_user: users.id_user,
          name_user: users.name_user,
          conta: users.conta,
        },
        chaveSec,
        { expiresIn: "20s" }
      );

      return res
        .status(200)
        .json({ token, conta: users.conta, name_user: users.name_user });
    } catch (error) {
      return response.status(401).json({ error });
    }
  }
};
