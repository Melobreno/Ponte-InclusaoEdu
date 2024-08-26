const prisma = require("../../clientLib/prisma");

module.exports = class insertLink {
  static async docLink(req, res) {
    const { name_doc, url_doc } = req.body;

    try {
      const link = await prisma.documents.create({
        data: { name_doc, url_doc },
      });
      return res
        .status(200)
        .json({ message: "Link Enviado com Sucesso", link });
    } catch (error) {
      return res.status(500).json({
        message: "Não foi possivel enviar o Link para o banco",
        error,
      });
    }
  }
};
