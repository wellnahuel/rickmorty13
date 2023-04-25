import Link from 'next/link'
import React from 'react'
import { Routes } from './models'
import  {Navigator}  from "../components"

function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h3>What do you want to see??</h3>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />


    </div>
  )
}

export default App