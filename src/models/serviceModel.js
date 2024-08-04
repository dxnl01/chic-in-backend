const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Client = require("./clientModel");
const Provider = require("./providerModel");
const Microservice = require("./microserviceModel");

const Service = sequelize.define("Service", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  requestDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  finishDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Active", "Finished", "Declined", "Pending"),
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Client,
      key: "id",
    },
    allowNull: false,
  },
  providerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Provider,
      key: "id",
    },
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definimos la relacion muchos a muchos
Service.belongsToMany(Microservice, {
  through: "ServiceMicroservices",
  foreignKey: "service_id",
});
Microservice.belongsToMany(Service, {
  through: "ServiceMicroservices",
  foreignKey: "microservice_id",
});

Client.hasMany(Service, { foreignKey: "clientId" });
Provider.hasMany(Service, { foreignKey: "providerId" });
Service.belongsTo(Client, { foreignKey: "clientId" });
Service.belongsTo(Provider, { foreignKey: "providerId" });

module.exports = Service;
