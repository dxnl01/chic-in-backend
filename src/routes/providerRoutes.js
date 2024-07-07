const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");

// Rutas 
router.post("/signup", providerController.signup);
router.post("/login", providerController.login);
router.post("/logout", providerController.logout);
router.get("/", providerController.getProviders);
router.get("/:id", providerController.getProvider);
router.put("/:id", providerController.updateProvider);
router.delete("/:id", providerController.deleteProvider);

module.exports = router;
