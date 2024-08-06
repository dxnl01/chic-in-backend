module.exports = (sequelize, DataTypes) => {
  const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Services",
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

  return ServiceMicroservices;
};
