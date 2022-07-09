import React from "react";
import { Link } from "react-router-dom";



function Text({hex, color, history}) {
  if (!hex) {
    history.push("/colors");

  }

  return (
    <div className="text" style={{ backgroundColor: hex }}>
      <p> This is {color}.</p>
      <p>Isn't it beautiful? </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Text;