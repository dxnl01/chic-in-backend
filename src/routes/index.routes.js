const express = require("express");
const clientRoutes = require("./clientRoutes");
const providerRoutes = require("./providerRoutes");
const serviceRoutes = require("./serviceRoutes");
const microserviceRoutes = require("./microserviceRoutes");

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
      acceptService: "PUT /api/services/accept/:id", // Auth required
      rejectService: "PUT /api/services/reject/:id", // Auth required
      getServiceById: "GET /api/services/:id",
      updateService: "PUT /api/services/:id", // Auth required
      deleteService: "DELETE /api/services/:id", // Auth required
      getAllServices: "GET /api/services", // Auth required
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
    microservices: {
      createMicroservice: "POST /api/microservices",
      getAllMicroservices: "GET /api/microservices", // Auth required
      getMicroserviceById: "GET /api/microservices/:id", // Auth required
      updateMicroservice: "PUT /api/microservices/:id", // Auth required
      deleteMicroservice: "DELETE /api/microservices/:id", // Auth required
    },
  });
});

// Rutas para los clientes (base path: /api/clients)
router.use("/clients", clientRoutes);

// Rutas para los proveedores (base path: /api/providers)
router.use("/providers", providerRoutes);

// Rutas para los servicios (base path: /api/services)
router.use("/services", serviceRoutes);

// Rutas para los microservicios (base path: /api/microservices)
router.use("/microservices", microserviceRoutes);

module.exports = router;
