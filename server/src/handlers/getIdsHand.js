const { getIds } = require("../controllers/getIdController");

const getIdsHand = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const drivers = await getIds(id, source);
    res.status(200).json(drivers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getIdsHand };
