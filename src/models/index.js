const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Client = require("./clientModel");
const Provider = require("./providerModel");
const Service = require("./serviceModel");
const Microservice = require("./microserviceModel");
const ServiceMicroservices = require("./serviceMicroserviceModel");

Client.hasMany(Service, { foreignKey: "clientId" });
Provider.hasMany(Service, { foreignKey: "providerId" });

Service.belongsTo(Client, { foreignKey: "clientId" });
Service.belongsTo(Provider, { foreignKey: "providerId" });

Service.belongsToMany(Microservice, {
  through: ServiceMicroservices,
  foreignKey: "serviceId",
});
Microservice.belongsToMany(Service, {
  through: ServiceMicroservices,
  foreignKey: "microserviceId",
});

module.exports = {
  sequelize,
  Client,
  Provider,
  Service,
  Microservice,
  ServiceMicroservices,
};
