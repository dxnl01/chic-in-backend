const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index.routes");
require("dotenv").config();
const sequelize = require("./config/db");
const authenticateToken = require("./middleware/authenticateToken");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usar las rutas principales
app.use("/api", routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
