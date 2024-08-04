const express = require("express");
const router = express.Router();
const microserviceController = require("../controllers/microserviceController");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/", authenticateToken, microserviceController.createMicroservice);
router.get("/", authenticateToken, microserviceController.getAllMicroservices);
router.get("/:id", authenticateToken, microserviceController.getMicroserviceById);
router.put("/:id", authenticateToken, microserviceController.updateMicroservice);
router.delete("/:id", authenticateToken, microserviceController.deleteMicroservice);

module.exports = router;
