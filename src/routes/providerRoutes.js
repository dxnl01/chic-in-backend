const express = require("express");
const router = express.Router();
const providerController = require("../controllers/providerController");
const authenticateToken = require("../middleware/authenticateToken");

// http://localhost:3001/providers/

router.post("/signup", providerController.signup);
router.post("/login", providerController.login);
router.post("/logout", authenticateToken, providerController.logout);

router.get("/", authenticateToken, providerController.getProviders);
router.get("/:id", authenticateToken, providerController.getProvider);
router.put("/:id", authenticateToken, providerController.updateProvider);
router.delete("/:id", authenticateToken, providerController.deleteProvider);

module.exports = router;
