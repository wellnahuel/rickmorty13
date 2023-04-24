import React from "react";
import { notFound } from "next/navigation";

function NotFoundComponent() {
  notFound();
  return <>Esto no lo vas a ni ver</>;
}

export default NotFoundComponent;
