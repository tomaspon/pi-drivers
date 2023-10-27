const { Router } = require("express");
const {getTeamsHand} = require("../handlers/getAllTeamsHand");

const teamsRoutes = Router();

teamsRoutes.get("/", getTeamsHand);

module.exports = {teamsRoutes};