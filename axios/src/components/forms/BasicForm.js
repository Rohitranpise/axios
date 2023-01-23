import React from "react";
import { useState } from "react";

function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    let newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.password);
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div>
        {allEntry.map((entry) => {
          return <h3>{entry.email} ,{entry.password}</h3>;
        })}
      </div>
    </div>
  );
}

export default BasicForm;
