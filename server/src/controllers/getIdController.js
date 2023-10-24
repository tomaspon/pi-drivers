const axios = require("axios");
const { Driver, Teams } = require("../db.js");
const { allDBDrivers } = require("../maps/map.js");

const getIds = async (id, source) => {
  let driver;
  if (source === "api") {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    driver = response.data;
  } else {
    driver = await Driver.findByPk(id, { include: [Teams] });
  }

  if (driver) {
    const drivers = allDBDrivers([driver]);
    return drivers[0];
  } else {
    throw new Error(`Driver with ID ${id} not found`);
  }
};

module.exports = {
  getIds,
};
