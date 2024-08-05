const Service = require("./serviceModel");
const ServiceMicroservices = require("./serviceMicroserviceModel");

module.exports = (sequelize, DataTypes) => {
  const Microservice = sequelize.define("Microservice", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    technique: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Microservice.belongsToMany(Service, {
    through: ServiceMicroservices,
    foreignKey: "microserviceId",
  });

  return Microservice;
};
