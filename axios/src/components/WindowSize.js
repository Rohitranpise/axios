import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const resizeFun = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFun);
  });
  return (
    <div>
      <h2>the actual size of the window is</h2>
      <p>{windowWidth}</p>
    </div>
  );
}

export default WindowSize;
