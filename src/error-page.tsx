import { useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page" style={{margin: "1 rem"}}>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i style={{color: "hsla(352.72, 98.1%, 41.18%, 1)"}}>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}