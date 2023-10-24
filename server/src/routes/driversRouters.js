const { Router } = require("express");
const { getIdsHand } = require("../handlers/getIdsHand");
const { getDriversHand } = require("../handlers/getDriversHand");
const { getNamesHand } = require("../handlers/getNamesHand");

const router = Router();

router.get("/drivers", getDriversHand);
router.get("/:id", getIdsHand);
router.get("/name", getNamesHand);
router.post("/drivers/:id");

module.exports = router;
