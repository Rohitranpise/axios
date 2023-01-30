import React from "react";
import { useContext } from "react";
import { Biodata } from "./ContextA";
function ContextF() {
  const ChannelName = useContext(Biodata);
  return <div>{ChannelName}</div>;
}

export default ContextF;
