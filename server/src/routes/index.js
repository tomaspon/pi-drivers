const { Router } = require("express");
const driversRouters = require("./driversRouters");

const router = Router();

router.use("/drivers", driversRouters);

module.exports = router;
