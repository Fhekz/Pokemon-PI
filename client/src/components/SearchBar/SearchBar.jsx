// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getPokemonByName } from "../../actions";

// export default function SearchBar() {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     setSearch(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(getPokemonByName(search));
//     setSearch("");
//   };

//   return (
//     <div>
//       <input
//         className="search"
//         type="text"
//         onChange={(e) => handleChange(e)}
//         placeholder="Search for a Pokémon"
//       />
//       <button className="boton" type="submit" onClick={(e) => handleSubmit(e)}>
//         Search
//       </button>
//     </div>
//   );
// }
