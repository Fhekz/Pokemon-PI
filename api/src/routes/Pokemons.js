const { Router } = require("express");
const router = Router();
const getAllPokemons = require("../controller/AllPokemons");
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res) => {
  const name = req.query.name;
  const allPokemons = await getAllPokemons();
  if (name) {
    let pokemonName = await allPokemons.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonName.length
      ? res.status(200).send(pokemonName)
      : res.status(404).send("404 Not Found");
  } else {
    res.status(200).send(allPokemons);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const allPokemons = await getAllPokemons();
  if (id) {
    let pokemonId = await allPokemons.filter(
      (p) => p.id.toString() === id.toString()
    );
    pokemonId.length
      ? res.status(200).send(pokemonId)
      : res.status(404).send("404 Not Found");
  } else {
    res.status(200).send(allPokemons);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, hp, attack, defense, speed, height, weight, image, types } =
      req.body;

    const newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
    });

    const typesDb = await Type.findAll({
      where: { name: types },
    });

    newPokemon.addType(typesDb);
    res.status(200).send("Pokemon created");
  } catch (err) {
    res.status(400).send("Hubo un error al crear el pokemon", err);
  }
});

module.exports = router;
