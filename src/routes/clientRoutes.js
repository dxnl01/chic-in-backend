const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/signup", clientController.signup);
router.post("/login", clientController.login);
router.post("/logout", clientController.logout);

router.get("/", clientController.getAllClients);
router.get("/:id", clientController.getClientById);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

module.exports = router;
