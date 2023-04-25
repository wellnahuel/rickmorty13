import React from "react";
import { getLocations } from "./services/locations.services";
import { Card } from "@/components";

async function fetchLocations() {
  const response = await getLocations();
  //const data = await response.json(); ESTO YA NO HACE FALTA, PORQUE LO HACEMOS EN EL SERVICE!
  return response;
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}


export default Locations