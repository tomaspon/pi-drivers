
// const axios = require("axios");
// const { Driver, Teams } = require("../db");

// const createDriver = async (name, lastName, description, image, teams, nationality, birthDate) => {
//   const newDriver = await Driver.create({
//         name,
//         lastName,
//         description,
//         image,
//         nationality,
//         birthDate
//     })

//     teams.forEach(async (teams) => {
//         let teamsDb=await Teams.findAll({
//             where: {
//                 name: teams
//             },
//           });
//           await newDriver.addTeams(teamsDb); 
//         });

//     const team = await Teams.findAll({
//         where: {
//             name: teams
//         }
//     })

//     await newDriver.addTeams(team);

//     await newDriver.reload({
//         include: {
//             model: Teams,
//             attributes: ["name"],
//             through: {
//                 attributes: []
//             }
//         }
//     });
// }

// module.exports = {
//     createDriver
// }

const { Driver, Teams } = require("../db");
const Sequelize = require("sequelize");

const createDriver = async (
  name,
  lastName,
  description,
  image,
  nationality,
  birthDate,
  teams
) => {
  try {
    const newDriver = await Driver.create({
      name,
      lastName,
      description,
      nationality,
      image,
      birthDate,
      teams
    });

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
    throw Error(error.message)
  }
};

module.exports = {createDriver};