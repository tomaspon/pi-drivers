const {getAllTeams} = require("../controllers/getAllTeamsController");

const getTeamsHand = async (req, res) => {
    try{
        const response = await getAllTeams();
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getTeamsHand
}