import React from "react";

import { useSelector } from "react-redux";

function Model() {
  const isCreated = useSelector((state) => state.createPokemon);
  if (isCreated) {
    return (
      <div>
        <div>
          <h2>Your pokemon was created!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>An error has ocurred</h1>
        </div>
      </div>
    );
  }
}

export default Model;
