const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");

// Importamos rutas
const clientRoutes = require("./routes/clientRoutes");
const providerRoutes = require("./routes/providerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usamos rutas
app.use("/clients", clientRoutes);
app.use("/providers", providerRoutes);
app.use("/services", serviceRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
