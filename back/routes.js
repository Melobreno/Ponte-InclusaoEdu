const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const insertUserController = require("./controller/insertUserController");
const loginUserController = require("./controller/loginUserController");
const insertDocLink = require("./controller/insertDocLinkController");
const showDocController = require("./controller/showDocController");
const deleteDocController = require("./controller/deleteDocController");
const showCepController = require("./controller/mapeamento/showCepController");
=======

const getController = require("./controller/ativiController/getController");
const postAtividade = require("./controller/ativiController/postAtidade");
const deleteAtividade = require("./controller/ativiController/deleteController");
const atualizaAtivi = require("./controller/ativiController/putcontriller");
const getAtividadeRes = require("./controller/ativiResController/getAtiviResController");

const insertUserController = require("./controller/users/insertUserController");
const loginUserController = require("./controller/users/loginUserController");
const insertDocLink = require("./controller/document/insertDocLinkController");
const showDocController = require("./controller/document/showDocController");
const deleteDocController = require("./controller/document/deleteDocController");
const insertMsgController = require("./controller/feed/insertMsgController");
const deleteMsgController = require("./controller/feed/deleteMsgController");
const showMsgController = require("./controller/feed/showMsgController");
const updateUserController = require("./controller/users/updateUserController");
const verificaUserController = require("./controller/users/verificaUserController");

>>>>>>> 19e4c16cd153d479d499118ff38d967df84bdca7

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc/", showDocController.showDoc);
router.delete("/deletedoc/:name_doc", deleteDocController.deleteDoc);
<<<<<<< HEAD
router.get("/showcep/:cidade", showCepController.showCep);

=======
router.get("/atividade", getController.getAtivi);
router.post("/enviarAtividade", postAtividade.ativiPost);
router.delete("/deletaratividade/:id_ativi", deleteAtividade.deletarAtivi);
router.put("/atualizaAtivi:id_ativi", atualizaAtivi.atualizaAtivi);
router.get("/atividadeRes", getAtividadeRes.getAtiviRes);
router.post("/insertmsg", insertMsgController.insertMsg);
router.delete("/deletemsg/:id", deleteMsgController.deleteMsg);
router.get("/showmsg", showMsgController.showMsg);
router.put("/updatepass", updateUserController.updateUser);
router.get("/verifica-email", verificaUserController.verificaEmail);
>>>>>>> 19e4c16cd153d479d499118ff38d967df84bdca7
module.exports = router;
