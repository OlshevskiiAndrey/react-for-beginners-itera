import React from "react";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState({ isAdmin: false, username: "Olga" });
  const { isAdmin } = state;
  const assignAdmin = () => {
    setState({ ...state, isAdmin: true });
  };
  return (
    <>
      <h1>Hello user, you is {isAdmin ? "SUPER ADMIN" : "a user"}</h1>
      <button onClick={assignAdmin}>Assign admin</button>
    </>
  );
};

export default App;
