const express = require("express");
const router = express.Router();
const microserviceController = require("../controllers/microserviceController");

router.post("/", microserviceController.createMicroservice);
router.get("/", microserviceController.getAllMicroservices);
router.get("/:id", microserviceController.getMicroserviceById);
router.put("/:id", microserviceController.updateMicroservice);
router.delete("/:id", microserviceController.deleteMicroservice);

module.exports = router;
