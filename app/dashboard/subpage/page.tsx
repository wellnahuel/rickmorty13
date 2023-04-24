import React from "react";
import NotFoundComponent from "./components/NotFoundComponent";


function Subpage() {
  return (
    <div>
      <h3>Subpage</h3>
      <NotFoundComponent />
    </div>
  );
}

export default Subpage;

//hay alguna forma de poder de hacer lo mismo que hace el layout pero renderizandolo de vuelta?
//si, con template.tsx en vez de layout.tsx
