const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Client = require("./clientModel")(sequelize, Sequelize.DataTypes);
const Provider = require("./providerModel")(sequelize, Sequelize.DataTypes);
const Service = require("./serviceModel")(sequelize, Sequelize.DataTypes);
const Microservice = require("./microserviceModel")(
  sequelize,
  Sequelize.DataTypes
);
const ServiceMicroservices = require("./serviceMicroserviceModel")(
  sequelize,
  Sequelize.DataTypes
);

Service.belongsToMany(Microservice, {
  through: ServiceMicroservices,
  foreignKey: "serviceId",
});
Microservice.belongsToMany(Service, {
  through: ServiceMicroservices,
  foreignKey: "microserviceId",
});

Client.hasMany(Service, { foreignKey: "clientId" });
Provider.hasMany(Service, { foreignKey: "providerId" });

Service.belongsTo(Client, { foreignKey: "clientId" });
Service.belongsTo(Provider, { foreignKey: "providerId" });

module.exports = {
  sequelize,
  Client,
  Provider,
  Service,
  Microservice,
  ServiceMicroservices,
};
