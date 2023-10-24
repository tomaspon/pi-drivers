const { getAllDrivers } = require("../controllers/getAllDrivers");

const getDriversHand = async (req, res) => {
  const driver = req.query;
  try {
    const drivers = await getAllDrivers(driver);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDriversHand };
