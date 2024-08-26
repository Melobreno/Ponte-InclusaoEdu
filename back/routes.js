const express = require("express");
const router = express.Router();

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

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc/", showDocController.showDoc);
router.delete("/deletedoc/:name_doc", deleteDocController.deleteDoc);

router.post("/insertmsg", insertMsgController.insertMsg);
router.delete("/deletemsg/:id", deleteMsgController.deleteMsg);
router.get("/showmsg", showMsgController.showMsg);
router.put("/updatepass", updateUserController.updateUser);
router.get("/verifica-email", verificaUserController.verificaEmail);

module.exports = router;
