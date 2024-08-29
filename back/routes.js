const express = require("express");
const router = express.Router();

const insertUserController = require("./controller/users/insertUserController");
const loginUserController = require("./controller/users/loginUserController");
const insertDocLink = require("./controller/document/insertDocLinkController");
const showDocController = require("./controller/document/showDocController");
const deleteDocController = require("./controller/document/deleteDocController");
const showCepController = require("./controller/mapeamento/showCepController");

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc/", showDocController.showDoc);
router.delete("/deletedoc/:name_doc", deleteDocController.deleteDoc);
router.get("/showcep/:cidade", showCepController.showCep);

module.exports = router;
