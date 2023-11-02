const { Router } = require("express");
const {getAllDriversHand} = require("../handlers/getAllDriversHand");
const {getIdDrivers} = require("../handlers/getDriverByIdHand");
const { postDriver } = require("../controllers/postDrivers");

const driversRoutes = Router();
driversRoutes.get("/", getAllDriversHand);
driversRoutes.get("/:id", getIdDrivers);
driversRoutes.get("/name", getAllDriversHand);
driversRoutes.post("/", postDriver);

module.exports = { driversRoutes };