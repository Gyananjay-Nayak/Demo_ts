import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const persionName = {
    first: "Bruce",
    last: "Wayne"
  }
  const personList = [
    {
      first: "John",
      last: "Wick"
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    }
  ]
  return (
    <div className="App">
      <Greet name="Gyananjay" messageCount={11} isLoggedIn={true} />
      <Person name={persionName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
