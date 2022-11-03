import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Cards />
      </div>
    </div>
  );
}
