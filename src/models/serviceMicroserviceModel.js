module.exports = (sequelize, DataTypes) => {
  const ServiceMicroservices = sequelize.define("ServiceMicroservices", {
    serviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Services",
        key: "id",
      },
      allowNull: false,
    },
    microserviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Microservices",
        key: "id",
      },
      allowNull: false,
    },
  });

  return ServiceMicroservices;
};
