const {getDrivers}  = require("../controllers/getAllDriversController");

const getAllDriversHand = async (req, res) => {
  try {
      const {name, page} = req.query;
      const response = await getDrivers(name, page);
      res.status(200).json(response);
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
};
module.exports = {getAllDriversHand};