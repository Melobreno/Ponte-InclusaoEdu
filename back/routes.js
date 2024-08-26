const express = require("express");
const router = express.Router();

const insertUserController = require("./controller/insertUserController");
const loginUserController = require("./controller/loginUserController");
const insertDocLink = require("./controller/insertDocLinkController");
const showDocController = require("./controller/showDocController");
const deleteDocController = require("./controller/deleteDocController");
const insertMsgController = require("./controller/feed/insertMsgController");
const deleteMsgController = require("./controller/feed/deleteMsgController");
const showMsgController = require("./controller/feed/showMsgController");

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc/", showDocController.showDoc);
router.delete("/deletedoc/:name_doc", deleteDocController.deleteDoc);

router.post("/insertmsg", insertMsgController.insertMsg);
router.delete("/deletemsg/:id", deleteMsgController.deleteMsg);
router.get("/showmsg", showMsgController.showMsg);

module.exports = router;
