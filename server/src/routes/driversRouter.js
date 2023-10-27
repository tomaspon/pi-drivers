const { Router } = require("express");
const {getDriversHand} = require("../handlers/getAllDriversHand");
const {getIdDrivers} = require("../handlers/getDriverByIdHand");
const {getNameDrivers} = require("../handlers/getDriverByNameHand");
const {postNewDriver} = require("../handlers/postDriverHand");

const driversRoutes = Router();
driversRoutes.get("/", getDriversHand);
driversRoutes.get("/:id", getIdDrivers);
driversRoutes.get("/name", getNameDrivers);
driversRoutes.post("/", postNewDriver);

module.exports = {driversRoutes};