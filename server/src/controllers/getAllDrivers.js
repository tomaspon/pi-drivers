const axios = require("axios");
const { Driver, Teams } = require("../db.js");
const { allDBDrivers } = require("../maps/map");

const getAllDrivers = async () => {
  const response = await axios.get("http://localhost:5000/drivers");
  const driversAPI = response.data;

  const driversDB = await Driver.findAll({ include: Teams });

  const allDrivers = driversDB.concat(driversAPI);

  return allDBDrivers(allDrivers);
};

module.exports = {
  getAllDrivers,
};
