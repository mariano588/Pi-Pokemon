const {getTypeController} = require('../controllers/TypeController')

const getTypesHandler = async (req,res) => {
    try {
        let response = await getTypeController()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = {getTypesHandler};