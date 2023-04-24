import { Character } from "@/app/characters/models";
import React from "react";

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  return (
    <div className="  bg-orange-400 p-4  rounded-md w-fit">
      <p>Name: {data.name}</p>
      <p>Type: {data.type}</p>
      <p>Created: {data.created}</p>
    </div>
  );
}

export default Card;
