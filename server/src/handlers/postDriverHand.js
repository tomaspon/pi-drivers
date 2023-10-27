const {createDriver} = require("../controllers/postDriverController");

const postNewDriver = async (req, res) => {
  const { name, lastName, description, image, nationality, birthDate, teams } =
    req.body;

  if (!Array.isArray(teams) || teams.length === 0) {
    return res
      .status(400)
      .json({
        error: "The 'teams' field should not be empty and must be an array",
      });
  }

  if (
    !name ||
    !lastName ||
    !description ||
    !image ||
    !nationality ||
    !birthDate
  ) {
    return res
      .status(400)
      .json({ error: "All required fields must be provided" });
  }

  try {
    const newDriver = await createDriver(
      name,
      lastName,
      description,
      image,
      nationality,
      birthDate,
      teams
    );
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {postNewDriver};