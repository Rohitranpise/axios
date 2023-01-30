import React from "react";
import { createContext } from "react";
import ContextF from "./ContextF";

const Biodata = createContext();
function ContextA() {
  return (
    <div>
      <h2>context created</h2>
      <Biodata.Provider value={"Rohit channel"}>
        <ContextF />
      </Biodata.Provider>
    </div>
  );
}

export default ContextA;
export { Biodata };
