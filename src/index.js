const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index.routes");
require("dotenv").config();
const { sequelize } = require("./models");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

module.exports = app;
