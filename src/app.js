const express = require("express");
const app = express();
const clientRoutes = require("./routes/clientRoutes");
const providerRoutes = require("./routes/providerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

app.use(express.json());
app.use("/api/clients", clientRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/services", serviceRoutes);

module.exports = app;
