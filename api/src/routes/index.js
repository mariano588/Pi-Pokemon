const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRouter = require('./PokeRouter');
const typeRouter = require('./TypeRputer')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokeRouter);
router.use('/types', typeRouter)


module.exports = router;
