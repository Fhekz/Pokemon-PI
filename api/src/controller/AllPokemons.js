const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
  const apiInfo = apiUrl.data.results;
  const pokemonsInfo = await Promise.all(apiInfo.map((d) => axios.get(d.url)));
  const allPokemons = pokemonsInfo.map(({ data }) => {
    return {
      id: data.id,
      name: data.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
      types: data.types.map((t) => t.type.name),
    };
  });
  return allPokemons;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

module.exports = getAllPokemons;
