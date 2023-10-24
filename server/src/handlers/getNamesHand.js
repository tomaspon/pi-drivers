const { getByName } = require("../controllers/getByName");

const getNamesHand = async (req, res) => {
  const { name } = req.query;
  try {
    const drivers = await getByName(name);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getNamesHand,
};
