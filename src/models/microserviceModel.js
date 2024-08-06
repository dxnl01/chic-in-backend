const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

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

  return Microservice;
};
