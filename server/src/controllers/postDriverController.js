const { Driver, Teams } = require("../db");
const Sequelize = require("sequelize");

const createDriver = async (
  name,
  lastname,
  description,
  image,
  nationality,
  birthdate,
  teams
) => {
  try {
    const newDriver = await Driver.create({
      name,
      lastname,
      description,
      image,
      nationality,
      birthdate,
    });

    const addTeams = await Teams.findAll({
      where: {
        name: {
          [Sequelize.Op.in]: teams,
        },
      },
    });

    await newDriver.addTeams(addTeams);

    const driverRelation = await Driver.findOne({
      where: {
        id: newDriver.id,
      },
      include: [
        {
          model: Teams,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return driverRelation;
  } catch (error) {
    throw error;
  }
};

module.exports = {createDriver};