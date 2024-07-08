const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const authenticateToken = require("../middleware/authenticateToken");

// http://localhost:3001/clients/

router.post("/signup", clientController.signup);
router.post("/login", clientController.login);
router.post("/logout", authenticateToken, clientController.logout);

router.get("/", authenticateToken, clientController.getAllClients);
router.get("/:id", authenticateToken, clientController.getClientById);
router.put("/:id", authenticateToken, clientController.updateClient);
router.delete("/:id", authenticateToken, clientController.deleteClient);

module.exports = router;
