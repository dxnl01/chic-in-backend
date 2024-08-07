const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Services",
      key: "id",
    },
  },
  microservice_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Microservices",
      key: "id",
    },
  },
});

module.exports = ServiceMicroservices;
