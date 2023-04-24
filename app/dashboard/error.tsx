"use client"

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    //Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button className="bg-blue-400" onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}

//que es error bounduries ?
//https://legacy.reactjs.org/docs/error-boundaries.html#:~:text=Error%20boundaries%20are%20React%20components,the%20component%20tree%20that%20crashed.
