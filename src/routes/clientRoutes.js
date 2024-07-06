const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/signup", clientController.signup);
router.post("/login", clientController.login);
router.post("/logout", clientController.logout);


module.exports = router;
