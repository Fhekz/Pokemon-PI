const axios = require('axios')
const { Router } = require('express')
const router = Router()
const { Type } = require('../db')

router.get('/', async (req, res) => {
    const apiType = await axios.get('https://pokeapi.co/api/v2/type');
    const typesInfo = apiType.data.results.map(t => t.name);
    typesInfo.forEach(t => {
        Type.findOrCreate({
            where: { name: t}
        });
    });
    const allTypes = await Type.findAll();
    res.status(200).send(allTypes);
});

module.exports = router;