const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.post("/request", serviceController.requestService);
router.post("/accept", serviceController.acceptService);


module.exports = router;
