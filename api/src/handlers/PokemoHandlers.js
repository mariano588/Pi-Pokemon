const {getAllPokemons, getByName, getPokeById, createpokemon} = require('../controllers/pokemonControllers')

const getPokemonsHandler = async (req, res) => {
   const {name} = req.query
   try {
      const response = name? await getByName(name) : await getAllPokemons()
      res.status(200).send(response)
   } catch (error) {
      res.status(400).send({error: error.message})
   }
};
const getDetailHandler = async (req, res) => {
   const {id} = req.params;
   const source = isNaN(id) ? 'bdd': 'api'
   try {
      const response = await getPokeById(id, source)
      res.status(200).send(response)
   } catch (error) {
      res.status(400).send({error: error.message})
   }
}
const createPokemonHandler = async (req, res) => {
   const {type1, type2, name, image, hp, attack, defense, speed, height, weight} = req.body;
   try {
      const response = await createpokemon(type1, type2, name, image, hp, attack, defense, speed, height, weight)
      res.status(200).send(response)
   } catch (error) {
      res.status(400).send({error: error.message})
   }
}

module.exports = {getPokemonsHandler, getDetailHandler, createPokemonHandler};