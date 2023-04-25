import { Character } from "@/app/characters/models";
import React from "react";
import Image from "next/image";

//type CardData = Partial<Character & Location>
//Partial lo que hace es aceptar la unificacion de los 2 y va a transformar todas las propiedades a opcionales.

export interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "No type";
  return (
    <div className="  bg-orange-400 p-4  shadow-2xl rounded-md w-fit">
      <p>Name: {data.name}</p>
      <p>Type: {formattedType} </p>
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image width="100" height="100" alt="Image" src={data.image} />
      )}
    </div>
  );
}

export default Card;
