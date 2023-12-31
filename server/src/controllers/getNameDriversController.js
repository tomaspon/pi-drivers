const axios = require("axios");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const driverName = async (name) => {
  const lowercaseName = name.toLowerCase();

  const dbDrivers = await Driver.findAll({
    where: {
      name: {
        [Op.iLike]: `%${lowercaseName}%`,
      },
    },
    include: [
      {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  const apiResponse = await axios.get(`http://localhost:5000/drivers`);
  const apiDrivers = apiResponse.data.filter((driver) =>
    driver.name.forename.toLowerCase().includes(lowercaseName)
  );

  const apiDataDrivers = apiDrivers.map((driver) => ({
    id: driver.id,
    name: driver.name.forename,
    lastname: driver.name.surname,
    description: driver.description,
    image:
      driver.image.url ||
      "https://www.seekpng.com/png/detail/414-4140251_you-profile-picture-question-mark.png",
    nationality: driver.nationality,
    birthdate: driver.dob,
    teams: driver.teams,
  }));

  const dbDataDrivers = dbDrivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    lastname: driver.lastname,
    description: driver.description,
    image: driver.image,
    nationality: driver.nationality,
    birthdate: driver.birthdate,
    teams: driver.Teams.map((team) => team.name),
  }));

  if (!apiDrivers.length && !dbDrivers.length)
    throw new Error("This driver does not exist.");

  return [...apiDataDrivers, ...dbDataDrivers].slice(0, 15);
};

module.exports = driverName;