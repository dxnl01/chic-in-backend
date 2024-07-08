const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

// http://localhost:3001/services/

// Rutas 
router.post("/", serviceController.requestService);
router.put("/:id/accept", serviceController.acceptService);
router.get("/", serviceController.getServices);
router.get("/:id", serviceController.getService);
router.put("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

// Filtros específicos
router.get("/provider/:id", serviceController.getServicesByProvider);
router.get("/client/:id", serviceController.getServicesByClient);
router.get("/city/:city", serviceController.getServicesByCity);
router.get("/category/:category", serviceController.getServicesByCategory);
router.get("/status/:status", serviceController.getServicesByStatus);
router.get("/date/:date", serviceController.getServicesByDate);
router.get("/price/:price", serviceController.getServicesByPrice);
router.get("/priceRange/:min/:max", serviceController.getServicesByPriceRange);
router.get("/dateRange/:start/:end", serviceController.getServicesByDateRange);
router.get(
  "/city/:city/category/:category",
  serviceController.getServicesByCityAndCategory
);
router.get(
  "/city/:city/status/:status",
  serviceController.getServicesByCityAndStatus
);
router.get(
  "/category/:category/status/:status",
  serviceController.getServicesByCategoryAndStatus
);
router.get(
  "/city/:city/date/:date",
  serviceController.getServicesByCityAndDate
);
router.get(
  "/category/:category/date/:date",
  serviceController.getServicesByCategoryAndDate
);
router.get(
  "/status/:status/date/:date",
  serviceController.getServicesByStatusAndDate
);
router.get(
  "/city/:city/price/:price",
  serviceController.getServicesByCityAndPrice
);
router.get(
  "/category/:category/price/:price",
  serviceController.getServicesByCategoryAndPrice
);
router.get(
  "/status/:status/price/:price",
  serviceController.getServicesByStatusAndPrice
);
router.get(
  "/city/:city/priceRange/:min/:max",
  serviceController.getServicesByCityAndPriceRange
);
router.get(
  "/category/:category/priceRange/:min/:max",
  serviceController.getServicesByCategoryAndPriceRange
);

module.exports = router;
