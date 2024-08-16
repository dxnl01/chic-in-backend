const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Provider = sequelize.define("Provider", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
});

module.exports = Provider;
