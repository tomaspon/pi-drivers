const axios = require("axios");
const { Driver, Teams } = require("../db");

const driversIds = async (id) => {
  if (id.length < 5) {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    const data = response.data;

    const idData = {
      id: data.id,
      name: data.name.forename,
      lastname: data.name.surname,
      description: data.description,
      image:
        data.image.url ||
        "https://th.bing.com/th/id/R.7123e3ecbbc960764e9f3748c85a24da?rik=Bug7jHIMuASTwA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_568657.png&ehk=vR2Oy8lOQ6lK5CZWu%2fxQLe1STk4J4gttUCfuOHGGbzA%3d&risl=&pid=ImgRaw&r=0",
      nationality: data.nationality,
      birthdate: data.dob,
      teams: data.teams,
    };

    return idData;
  } else {
    const searchById = await Driver?.findByPk(id, {
      include: {
        model: Teams,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return searchById;
  }
};

module.exports = {driversIds};