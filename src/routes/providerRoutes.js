const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");

router.post("/signup", providerController.signup);
router.post("/login", providerController.login);
router.post("/logout", providerController.logout);


module.exports = router;
