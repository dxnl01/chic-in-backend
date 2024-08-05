const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
  serviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Service",
      key: "id",
    },
  },
  microserviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Microservices",
      key: "id",
    },
  },
});

module.exports = ServiceMicroservices;
