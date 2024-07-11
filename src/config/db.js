const { Sequelize } = require("sequelize");
require("dotenv").config();
/*
const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, 
  dialect: "postgres",
  protocol: "postgres",
  logging: console.log,
}); */

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "postgres",
  protocol: "postgres",
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
