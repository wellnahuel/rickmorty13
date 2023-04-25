import React from 'react'

function LocationLayout({children}: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-4'>{children}</div>
  )
}

export default LocationLayout

//children es la page o lo que venga hijo de ella
