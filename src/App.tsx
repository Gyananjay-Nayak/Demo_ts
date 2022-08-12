import React from "react";
import "./App.css";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
        <Greet name="Gyananjay" isLoggedIn={true} />
      </Oscar>
    </div>
  );
}

export default App;
