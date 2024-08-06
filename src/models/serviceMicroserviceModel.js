const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
  serviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Service",
      key: "id",
    },
    allowNull: false,
  },
  microserviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Microservice",
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = ServiceMicroservices;
