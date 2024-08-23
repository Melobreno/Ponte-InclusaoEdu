const express = require("express");
const router = express.Router();

const insertUserController = require("./controller/insertUserController");
const loginUserController = require("./controller/loginUserController");
const insertDocLink = require("./controller/insertDocLink");
const showDocController = require("./controller/showDocController");

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);
router.post("/enviarlink", insertDocLink.docLink);
router.get("/showdoc", showDocController.showDoc);

module.exports = router;
