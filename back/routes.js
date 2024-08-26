const express = require("express");
const router = express.Router();

const getController = require("./controller/ativiController/getController");
const insertUserController = require("./controller/insertUserController");
const loginUserController = require("./controller/loginUserController");
const insertDocLink = require("./controller/insertDocLinkController");
const showDocController = require("./controller/showDocController");
const deleteDocController = require("./controller/deleteDocController");
const postAtividade = require("./controller/ativiController/postAtidade");
const deleteAtividade = require("./controller/ativiController/deleteController");
const atualizaAtivi = require("./controller/ativiController/putcontriller");
const getAtividadeRes = require("./controller/ativiResController/getAtiviResController");

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc/", showDocController.showDoc);
router.delete("/deletedoc/:name_doc", deleteDocController.deleteDoc);
router.get("/atividade", getController.getAtivi);
router.post("/enviarAtividade", postAtividade.ativiPost);
router.delete("/deletaratividade/:id_ativi", deleteAtividade.deletarAtivi);
router.put("/atualizaAtivi:id_ativi", atualizaAtivi.atualizaAtivi);
router.get("/atividadeRes", getAtividadeRes.getAtiviRes);
module.exports = router;
