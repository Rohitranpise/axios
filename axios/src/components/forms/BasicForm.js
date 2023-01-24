import React from "react";
import { useState } from "react";

function BasicForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    if (email && password) {
      e.preventDefault();
      let newEntry = { id: new Date().getTime().toString(), email, password };

      setAllEntry([...allEntry, newEntry]);
    } else {
      alert("Please enter the details");
    }
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
          return (
            <h3>
              {entry.email} ,{entry.password}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

export default BasicForm;
