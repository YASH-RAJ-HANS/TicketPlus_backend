const { Sequelize } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("./config")[env];

const sequelize = new Sequelize(config);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
