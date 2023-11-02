
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
const {getAllDrivers } = require("../helper/driversMap");

const postDriver = async (name, lastName, description, image, teams, nationality, birthDate) => {
    const formattedBirthDate = new Date(birthDate).toISOString().split('T')[0];
    const newDriver = await Driver.create({
        name,
        lastName,
        description,
        image,
        nationality,
        birthDate: formattedBirthDate
    })

    teams.forEach(async (teams) => {
        let teamsDb=await Teams.findAll({
            where: {
                name: [teams]
            },
        });
        
        await newDriver.addTeams(teamsDb); 
    });

    const team = await Teams.findAll({
        where: {
            name: teams
        }
    })

    await newDriver.addTeams(team);

   
    return getAllDrivers(newDriver);
}

module.exports = {
    postDriver
}