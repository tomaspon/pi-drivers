const { Router } = require("express");
const { getAllDriversHand } = require("../handlers/getAllDriversHand");
const { getIdHandler } = require("../handlers/getDriverByIdHand");
const postNewDriver = require("../handlers/postDriverHand");
const { getTeamsHand } = require("../handlers/getAllTeamsHand");
const { getNameDriversHand } = require("../handlers/getNameDriversHand");


const router = Router();
router.get("/drivers/name", getNameDriversHand);
router.get("/drivers/:id", getIdHandler);
router.get("/drivers", getAllDriversHand);
router.post("/drivers", postNewDriver, getTeamsHand);

router.get("/teams", getTeamsHand);
module.exports = router;