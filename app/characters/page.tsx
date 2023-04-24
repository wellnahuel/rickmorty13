import React from "react";
import { getCharacters } from "./services/characters.services";
import { Card } from "@/components";

async function fetchCharacters() {
  const response = await getCharacters();
  //const data = await response.json(); ESTO YA NO HACE FALTA, PORQUE LO HACEMOS EN EL SERVICE!
  return response;
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
}

export default Characters;
