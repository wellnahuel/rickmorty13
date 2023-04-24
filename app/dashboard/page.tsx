import React from "react";
import Image from "next/image"


async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}

async function Dashboard() {
  const data = await getData();
//TODO ESTO NO LO HACE EL CLIENT, LO HACE EL SERVER
  return (
    <div>
      <Image width="100" height="100" src={data.image} alt="Morty" />
    </div>
  );
}

export default Dashboard;
