import Link from 'next/link'
import React from 'react'
import { Routes } from './models'
import  {Navigator}  from "../components"
import Image from "next/image"
import arbol from "../public/images/tree.jpg"

function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h3>What do you want to see??</h3>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image width="400" height="400" alt="image" src={arbol}/>
      
    </div>
  )
}

export default App