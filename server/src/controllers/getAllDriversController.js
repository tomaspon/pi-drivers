const axios = require("axios");
const { Driver, Teams } = require("../db");

const allDrivers = async () => {
  try {
    let response = await axios.get(`http://localhost:5000/drivers`);
    let results = response.data;
    const dataDrivers = await Promise.all(
      results.map(async (driverData) => {
        return {
          id: driverData.id,
          name: driverData.name.forename,
          lastName: driverData.name.surname,
          description: driverData.description,
          image:
            driverData.image.url ||
            "https://th.bing.com/th/id/R.7123e3ecbbc960764e9f3748c85a24da?rik=Bug7jHIMuASTwA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_568657.png&ehk=vR2Oy8lOQ6lK5CZWu%2fxQLe1STk4J4gttUCfuOHGGbzA%3d&risl=&pid=ImgRaw&r=0",
          nationality: driverData.nationality,
          birthDate: driverData.dob,
          teams: driverData.teams,
        };
      })
    );

    const dbData = await Driver.findAll({
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

    const dbDataDrivers = dbData.map(
      ({
        id,
        name,
        lastName,
        description,
        image,
        nationality,
        birthDate,
        teams,
        createDb,
      }) => ({
        id: id,
        name: name,
        lastName: lastName,
        description: description,
        image: image,
        nationality: nationality,
        birthDate: birthDate,
        teams: teams.map((team) => team.name),
        createDb,
      })
    );

    const allData = [...dataDrivers, ...dbDataDrivers];
    return allData;
  } catch (error) {
    throw error;
  }
};

module.exports = {allDrivers};