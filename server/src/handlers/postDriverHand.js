  
    const {postDriver} = require("../controllers/postDrivers")

    const postDriverHand = async (req, res)=>{
        const { name, lastName, description, image, teams, nationality, birthDate } = req.body;
        try{
            const newDriver = await postDriver(name, lastName, description, image, teams, nationality, birthDate);
            res.status(200).json(newDriver);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }      
    module.exports = {
        postDriverHand
    }