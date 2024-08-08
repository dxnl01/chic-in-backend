const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
  serviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Services",
      key: "id",
    },
    primaryKey: true,
  },
  microserviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Microservices",
      key: "id",
    },
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = ServiceMicroservices;
