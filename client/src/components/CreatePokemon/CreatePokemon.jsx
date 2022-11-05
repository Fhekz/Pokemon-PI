import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemonType, createPokemon, clearState } from "../../actions";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.pokemonsTypes);

  const [errors, setErrors] = useState({ name: "" });

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getPokemonType());
  }, []);

  function onInputChange(e) {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(pokemon);
    dispatch(createPokemon(pokemon));
    alert("Personaje creado con exito");
    setPokemon({
      name: "",
      types: [],
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
    history.push("/home");
  }

  const finishedForm = () => {
    setTimeout(() => dispatch(clearState()), 2000);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <NavBar />
        <div>
          <div>
            <div>
              {pokemon.image ? (
                <img src={pokemon.image} alt={pokemon.name}></img>
              ) : (
                <img src="../newPokemonImg.png" alt="New Pokemon"></img>
              )}
              {pokemon.name && <p>{pokemon.name}</p>}
            </div>
            <form onSubmit={onSubmit}>
              <h1>Create a new pokemon</h1>
              <div></div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={onInputChange}
                  value={pokemon.name}
                  className={errors.name}
                ></input>
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Image"
                  name="image"
                  onChange={onInputChange}
                  value={pokemon.image}
                ></input>
                {errors.image && <p>{errors.image}</p>}
              </div>
              <div>
                <select
                  name="type1"
                  onChange={onInputChange}
                  value={pokemon.type1}
                >
                  <option value="Type 1">Type 1</option>
                  {types &&
                    types
                      .sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                      })
                      .map((type) => {
                        return (
                          <option value={type.name} key={type.id}>
                            {type.name}
                          </option>
                        );
                      })}
                </select>
                <select
                  name="type2"
                  onChange={onInputChange}
                  value={pokemon.type2}
                >
                  <option value="Type 2">Type 2</option>
                  {types &&
                    types
                      .sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                      })
                      .map((type) => {
                        return (
                          <option value={type.name} key={type.id}>
                            {type.name}
                          </option>
                        );
                      })}
                </select>
                {errors.type1 && <p>{errors.type1}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Height"
                  name="height"
                  onChange={onInputChange}
                  value={pokemon.height}
                  className={errors.height}
                ></input>
                {errors.height && <p>{errors.height}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Weight"
                  name="weight"
                  onChange={onInputChange}
                  value={pokemon.weight}
                  className={errors.weight}
                ></input>
                {errors.weight && <p>{errors.weight}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Health"
                  name="hp"
                  onChange={onInputChange}
                  value={pokemon.hp}
                  className={errors.hp}
                ></input>
                {errors.hp && <p>{errors.hp}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Attack"
                  name="attack"
                  onChange={onInputChange}
                  value={pokemon.attack}
                  className={errors.attack}
                ></input>
                {errors.attack && <p>{errors.attack}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Defense"
                  name="defense"
                  onChange={onInputChange}
                  value={pokemon.defense}
                  className={errors.defense}
                ></input>
                {errors.defense && <p>{errors.defense}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Speed"
                  name="speed"
                  onChange={onInputChange}
                  value={pokemon.speed}
                  className={errors.speed}
                ></input>
                {errors.speed && <p>{errors.speed}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      {Object.keys(errors).length !== 0 ? (
        <div>
          <Link to="/home">
            <button type="submit" className="atras">
              Atrás
            </button>
          </Link>
          <button disabled="true" onClick={finishedForm}>
            <p>Complete the form</p>
          </button>
        </div>
      ) : (
        <div>
          <Link to="/home">
            <button type="submit" className="atras">
              Atrás
            </button>
          </Link>
          <button type="submit" onClick={finishedForm}>
            Create
          </button>
        </div>
      )}
    </form>
  );
}

export function validateForm(pokemon) {
  let errors = {};
  if (!pokemon.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(pokemon.name)) {
    errors.name = "Name must be plain text";
  }
  if (!pokemon.image) {
    errors.image = "Image is required";
  } else if (
    !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
      pokemon.image
    )
  ) {
    errors.image = "An URL of an image is required";
  }
  if (!pokemon.type1 || pokemon.type1 === "type1") {
    errors.type1 = "Type can not be empty";
  }
  if (!pokemon.height) {
    errors.height = "Height is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(pokemon.height)) {
    errors.height = "Height must be between 1 and 1000";
  }
  if (!pokemon.weight) {
    errors.weight = "Weight is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(pokemon.weight)) {
    errors.weight = "Weight must be between 1 and 1000";
  }

  if (!pokemon.hp) {
    errors.hp = "Hp is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.hp)
  ) {
    errors.hp = "Hp must be between 1 and 255";
  }
  if (!pokemon.attack) {
    errors.attack = "Attack is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.attack)
  ) {
    errors.attack = "Attack must be between 1 and 255";
  }
  if (!pokemon.defense) {
    errors.defense = "Defense is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.defense)
  ) {
    errors.defense = "Defense must be between 1 and 255";
  }
  if (!pokemon.speed) {
    errors.speed = "Speed is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.speed)
  ) {
    errors.speed = "Speed must be between 1 and 255";
  }

  return errors;
}
