import React, { useReducer } from "react";

function Reducer() {
  const initialState = 0;
  const reducerFunction = (state, action) => {
    if (action.type === "increment") {
      return (state = state + 1);
    } else if (action.type === "decrement") {
      return (state = state - 1);
    } else if (action.type === "reset") {
      return (state = initialState);
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h3>{state}</h3>
      <h2>reducer hook</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default Reducer;
