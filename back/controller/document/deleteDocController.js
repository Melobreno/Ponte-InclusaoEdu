const prisma = require("../../clientLib/prisma");

module.exports = class deleteDocController {
  static async deleteDoc(req, res) {
    const { name_doc } = req.params;

    try {
      console.log("name_doc recebido:", name_doc);
      const docDel = await prisma.documents.deleteMany({
        where: { name_doc },
      });
      return res
        .status(200)
        .json({ message: "Documento apagado com sucesso!!", docDel });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possivel apagar o Documento!!", error });
    }
  }
};
