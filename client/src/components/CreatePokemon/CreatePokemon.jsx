import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPokemonType, createPokemon, clearState } from "../../actions";
import { Link } from "react-router-dom";
import styles from "./CreatePokemon.module.css";

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.pokemonsTypes);

  const [errors, setErrors] = useState({ name: "" });

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
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
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
    });
    history.push("/home");
  }

  const finishedForm = () => {
    setTimeout(() => dispatch(clearState()), 2000);
  };

  return (
    <div className={styles.container}>
      <div>
        <form className={styles.form_main} onSubmit={onSubmit}>
          <div className={styles.title}>
            <div>
              <h1>Create a new pokemon</h1>
            </div>
          </div>
          <div className={styles.content}>
            <div>
              <div>
                {pokemon.image ? (
                  <img src={pokemon.image} alt={pokemon.name}></img>
                ) : (
                  <img src="../newPokemonImg.png" alt="New Pokemon"></img>
                )}
              </div>
            </div>
            <div>
              <div className={styles.form_content} onSubmit={onSubmit}>
                <div className={styles.name}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={onInputChange}
                      value={pokemon.name}
                      className={errors.name && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.name && (
                      <p className={styles.errors}>{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className={styles.image}>
                  <div>
                    <input
                      type="text"
                      placeholder="Image"
                      name="image"
                      className={styles.danger}
                      onChange={onInputChange}
                      value={pokemon.image}
                    ></input>
                  </div>
                  <div>
                    {errors.image && (
                      <p className={styles.errors}>{errors.image}</p>
                    )}
                  </div>
                </div>
                <div className={styles.types}>
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
                  </div>
                  <div>
                    {errors.type1 && (
                      <p className={styles.errors}>{errors.type1}</p>
                    )}
                  </div>
                </div>
                <div className={styles.height}>
                  <div>
                    <input
                      type="text"
                      placeholder="Height"
                      name="height"
                      onChange={onInputChange}
                      value={pokemon.height}
                      className={errors.height && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.height && (
                      <p className={styles.errors}>{errors.height}</p>
                    )}
                  </div>
                </div>
                <div className={styles.weight}>
                  <div>
                    <input
                      type="text"
                      placeholder="Weight"
                      name="weight"
                      onChange={onInputChange}
                      value={pokemon.weight}
                      className={errors.weight && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.weight && (
                      <p className={styles.errors}>{errors.weight}</p>
                    )}
                  </div>
                </div>
                <div className={styles.health}>
                  <div>
                    <input
                      type="text"
                      placeholder="Health"
                      name="hp"
                      onChange={onInputChange}
                      value={pokemon.hp}
                      className={errors.hp && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.hp && <p className={styles.errors}>{errors.hp}</p>}
                  </div>
                </div>
                <div className={styles.attack}>
                  <div>
                    <input
                      type="text"
                      placeholder="Attack"
                      name="attack"
                      onChange={onInputChange}
                      value={pokemon.attack}
                      className={errors.attack && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.attack && (
                      <p className={styles.errors}>{errors.attack}</p>
                    )}
                  </div>
                </div>
                <div className={styles.defense}>
                  <div>
                    <input
                      type="text"
                      placeholder="Defense"
                      name="defense"
                      onChange={onInputChange}
                      value={pokemon.defense}
                      className={errors.defense && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.defense && (
                      <p className={styles.errors}>{errors.defense}</p>
                    )}
                  </div>
                </div>
                <div className={styles.speed}>
                  <div>
                    <input
                      type="text"
                      placeholder="Speed"
                      name="speed"
                      onChange={onInputChange}
                      value={pokemon.speed}
                      className={errors.speed && styles.danger}
                    ></input>
                  </div>
                  <div>
                    {errors.speed && (
                      <p className={styles.errors}>{errors.speed}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content_btns}>
            {Object.keys(errors).length !== 0 ? (
              <div className={styles.btn_after}>
                <Link to="/home">
                  <button type="submit" className={styles.goback}>
                    Go Back
                  </button>
                </Link>
                <button
                  disabled
                  className={styles.btnError}
                  onClick={finishedForm}
                >
                  <p>Complete the form</p>
                </button>
              </div>
            ) : (
              <div className={styles.btn_before}>
                <Link to="/home">
                  <button type="submit" className={styles.goback}>
                    Go Back
                  </button>
                </Link>
                <button
                  type="submit"
                  className={styles.btn}
                  onClick={finishedForm}
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
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
    errors.hp = "Hp must be between 0 and 255";
  }
  if (!pokemon.attack) {
    errors.attack = "Attack is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.attack)
  ) {
    errors.attack = "Attack must be between 0 and 255";
  }
  if (!pokemon.defense) {
    errors.defense = "Defense is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.defense)
  ) {
    errors.defense = "Defense must be between 0 and 255";
  }
  if (!pokemon.speed) {
    errors.speed = "Speed is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(pokemon.speed)
  ) {
    errors.speed = "Speed must be between 0 and 255";
  }

  return errors;
}
