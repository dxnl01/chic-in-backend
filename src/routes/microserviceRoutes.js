const express = require("express");
const router = express.Router();
const microserviceController = require("../controllers/microserviceController");

router.post("/", microserviceController.createMicroservice);
router.get("/:id", microserviceController.getMicroserviceById);

module.exports = router;
