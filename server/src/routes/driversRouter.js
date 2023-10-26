const { Router } = require("express");
const {getNameDrivers} = require("../handlers/getDriverByNameHand");
const {getIdDrivers} = require("../handlers/getDriverByIdHand");
const {getDriversHand} = require("../handlers/getAllDriversHand");
const {postNewDriver} = require("../handlers/postDriverHand");

const driversRoutes = Router();
driversRoutes.get("/name", getNameDrivers);
driversRoutes.get("/:id", getIdDrivers);
driversRoutes.get("/", getDriversHand);
driversRoutes.post("/", postNewDriver);

module.exports = {driversRoutes};