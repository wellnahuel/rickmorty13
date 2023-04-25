import Link from "next/link";
import React from "react";
import { Routes, arbolBlur } from "./models";
import { Navigator } from "../components";
import Image from "next/image";
import arbol from "../public/images/tree.jpg";

function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h3>What do you want to see??</h3>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image
        width="600"
        height="600"
        src={arbol}
        blurDataURL={arbolBlur}
        placeholder="blur"
        alt="Arbolito"
        priority
      />
    </div>
  );
}

//priority le dice al browser que cargue primero las cosas pesadas, mejorando el posicionamiento del SEO

export default App;
