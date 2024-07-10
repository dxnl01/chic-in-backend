const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/", authenticateToken, serviceController.requestService);
router.put("/accept/:id", authenticateToken, serviceController.acceptService);
router.put("/reject/:id", authenticateToken, serviceController.rejectService);
router.get("/", authenticateToken, serviceController.getServices);
router.get("/:id", authenticateToken, serviceController.getService);
router.put("/:id", authenticateToken, serviceController.updateService);
router.delete("/:id", authenticateToken, serviceController.deleteService);

router.get(
  "/provider/:id",
  authenticateToken,
  serviceController.getServicesByProvider
);
router.get(
  "/client/:id",
  authenticateToken,
  serviceController.getServicesByClient
);
router.get(
  "/city/:city",
  authenticateToken,
  serviceController.getServicesByCity
);
router.get(
  "/category/:category",
  authenticateToken,
  serviceController.getServicesByCategory
);
router.get(
  "/status/:status",
  authenticateToken,
  serviceController.getServicesByStatus
);
router.get(
  "/date/:date",
  authenticateToken,
  serviceController.getServicesByDate
);
router.get(
  "/price/:price",
  authenticateToken,
  serviceController.getServicesByPrice
);
router.get(
  "/price-range/:min/:max",
  authenticateToken,
  serviceController.getServicesByPriceRange
);
router.get(
  "/date-range/:start/:end",
  authenticateToken,
  serviceController.getServicesByDateRange
);
router.get(
  "/city-category/:city/:category",
  authenticateToken,
  serviceController.getServicesByCityAndCategory
);
router.get(
  "/city-status/:city/:status",
  authenticateToken,
  serviceController.getServicesByCityAndStatus
);
router.get(
  "/category-status/:category/:status",
  authenticateToken,
  serviceController.getServicesByCategoryAndStatus
);
router.get(
  "/city-date/:city/:date",
  authenticateToken,
  serviceController.getServicesByCityAndDate
);
router.get(
  "/category-date/:category/:date",
  authenticateToken,
  serviceController.getServicesByCategoryAndDate
);
router.get(
  "/status-date/:status/:date",
  authenticateToken,
  serviceController.getServicesByStatusAndDate
);
router.get(
  "/city-price/:city/:price",
  authenticateToken,
  serviceController.getServicesByCityAndPrice
);
router.get(
  "/category-price/:category/:price",
  authenticateToken,
  serviceController.getServicesByCategoryAndPrice
);
router.get(
  "/status-price/:status/:price",
  authenticateToken,
  serviceController.getServicesByStatusAndPrice
);
router.get(
  "/city-price-range/:city/:min/:max",
  authenticateToken,
  serviceController.getServicesByCityAndPriceRange
);
router.get(
  "/category-price-range/:category/:min/:max",
  authenticateToken,
  serviceController.getServicesByCategoryAndPriceRange
);

module.exports = router;
