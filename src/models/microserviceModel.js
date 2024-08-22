const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = Microservice;
