const { Router } = require("express");
const {driversRoutes} = require("./driversRouter");
const {teamsRoutes} = require("./teamsRouter");

const router = Router();

router.use("/drivers", driversRoutes);
router.use("/teams", teamsRoutes);

module.exports = router;