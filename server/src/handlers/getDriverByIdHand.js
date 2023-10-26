const {driversIds} = require("../controllers/getDriverByIdController");

const getIdDrivers = async (req, res) => {
  const { id } = req.params;
  try {
    const driver = await driversIds(id);
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getIdDrivers};