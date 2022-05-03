import React from "react";
import "./App.css";
import customData from "./data.json";

const Bio = () => (
  <div className="App">
    <h1>Welcome to the My World!</h1>
    <h2>
      Hello! My name is {customData.firstName}.<br></br>
      {customData.biography}
    </h2>
    <p className="textAlighn">
      My contacts: <br></br>
      Phone: {customData.contacts.phone} <br></br>
      Email: {customData.contacts.email}
    </p>
  </div>
);

export default Bio;
