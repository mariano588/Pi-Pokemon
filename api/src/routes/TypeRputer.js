const {Router} = require('express');
const {getTypesHandler} = require('../handlers/TypesHandler')
const typeRouter = Router();

typeRouter.get('/', getTypesHandler)


module.exports = typeRouter;