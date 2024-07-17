const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index.routes");
require("dotenv").config();
const sequelize = require("./config/db");
const cors = require("cors");
const AWS = require("aws-sdk");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

app.use("/api", router);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

module.exports = app;
