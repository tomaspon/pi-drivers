const { Router } = require("express");
const {getAllTeams} = require("../handlers/getAllTeamsHand");

const teamsRoutes = Router();

teamsRoutes.get("/", getAllTeams);

module.exports = {teamsRoutes};