const express = require("express");
const clientRoutes = require("./routes/clientRoutes");
const providerRoutes = require("./routes/providerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const authenticateToken = require("./middlewares/authenticateToken");

const router = express.Router();

// Ruta principal (http://localhost:3001/api)

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Chic In API",
    clients: {
      signup: "POST /api/clients/signup",
      login: "POST /api/clients/login",
      logout: "POST /api/clients/logout",
      getAllClients: "GET /api/clients", // Auth required
      getClientById: "GET /api/clients/:id", // Auth required
      updateClient: "PUT /api/clients/:id", // Auth required
      deleteClient: "DELETE /api/clients/:id", // Auth required
    },
    providers: {
      signup: "POST /api/providers/signup",
      login: "POST /api/providers/login",
      logout: "POST /api/providers/logout",
      getAllProviders: "GET /api/providers", // Auth required
      getProviderById: "GET /api/providers/:id", // Auth required
      updateProvider: "PUT /api/providers/:id", // Auth required
      deleteProvider: "DELETE /api/providers/:id", // Auth required
    },
    services: {
      requestService: "POST /api/services",
      getServiceById: "GET /api/services/:id",
      updateService: "PUT /api/services/:id", // Auth required
      deleteService: "DELETE /api/services/:id", // Auth required
      getServicesByProvider: "GET /api/services/provider/:id",
      getServicesByClient: "GET /api/services/client/:id",
      getServicesByCity: "GET /api/services/city/:city",
      getServicesByCategory: "GET /api/services/category/:category",
      getServicesByStatus: "GET /api/services/status/:status",
      getServicesByDate: "GET /api/services/date/:date",
      getServicesByPrice: "GET /api/services/price/:price",
      getServicesByPriceRange: "GET /api/services/price-range/:min/:max",
      getServicesByDateRange: "GET /api/services/date-range/:start/:end",
      getServicesByCityAndCategory:
        "GET /api/services/city-category/:city/:category",
      getServicesByCityAndStatus: "GET /api/services/city-status/:city/:status",
      getServicesByCategoryAndStatus:
        "GET /api/services/category-status/:category/:status",
      getServicesByCityAndDate: "GET /api/services/city-date/:city/:date",
      getServicesByCategoryAndDate:
        "GET /api/services/category-date/:category/:date",
      getServicesByStatusAndDate: "GET /api/services/status-date/:status/:date",
      getServicesByCityAndPrice: "GET /api/services/city-price/:city/:price",
      getServicesByCategoryAndPrice:
        "GET /api/services/category-price/:category/:price",
      getServicesByStatusAndPrice:
        "GET /api/services/status-price/:status/:price",
      getServicesByCityAndPriceRange:
        "GET /api/services/city-price-range/:city/:min/:max",
      getServicesByCategoryAndPriceRange:
        "GET /api/services/category-price-range/:category/:min/:max",
    },
  });
});

// Rutas para los clientes (base path: /api/clients)
router.use("/clients", clientRoutes);

// Rutas para los proveedores (base path: /api/providers)
router.use("/providers", providerRoutes);

// Rutas para los servicios (base path: /api/services)
router.use("/services", serviceRoutes);

module.exports = router;
