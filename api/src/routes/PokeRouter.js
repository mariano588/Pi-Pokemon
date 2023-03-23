const {Router} = require('express');
const pokeRouter = Router()
const {getPokemonsHandler, getDetailHandler, createPokemonHandler} = require('../handlers/PokemoHandlers')

pokeRouter.get("/", getPokemonsHandler);
pokeRouter.get("/:id", getDetailHandler);
pokeRouter.post("/", createPokemonHandler)


module.exports = pokeRouter;