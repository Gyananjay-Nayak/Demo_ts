import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";

function App() {
  return (
    <div className="App">
      <Container styles={{ border: "1px solid black", padding: "10px" }} />
      <LoggedIn/>
      <User/>
    </div>
  );
}

export default App;
