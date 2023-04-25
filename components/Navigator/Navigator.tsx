import { Route } from "@/app/models";
import Link from "next/link";
import React from "react";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div className="flex gap-5 flex-row">
      {pathNames.map((pathName) => (
        <Link key={pathName.path} href={pathName.path}>{pathName.name}</Link>
      ))}
    </div>
  );
}

export default Navigator;
