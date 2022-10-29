const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const routesPokemons = require('./Pokemons')
const routesTypes = require('./Types')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', routesPokemons);
router.use('/types', routesTypes);

module.exports = router;
