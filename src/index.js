const app = require("./app");
const sequelize = require("./config/db");
const Client = require("./models/clientModel");
const Provider = require("./models/providerModel");
const Service = require("./models/serviceModel");

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
