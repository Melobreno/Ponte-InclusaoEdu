const express = require("express");
const router = express.Router();

const insertUserController = require("./controller/insertUserController");
const loginUserController = require("./controller/loginUserController");

router.post("/adicionar", insertUserController.insertUser);
router.post("/login", loginUserController.loginUser);

module.exports = router;
