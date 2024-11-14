import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [clock, setClock] = useState(10);
  const [count, setCount] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  useEffect(() => {
    if (isClockRunning && clock > 0) {
      const interval = setInterval(() => {
        setClock((prevClock) => prevClock - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isClockRunning, clock]);

  const [persons, setPersons] = useState([
    { name: "Albert", age: 30 },
    { name: "Bruno_leKinder", age: 12 },
    { name: "clio5turbo", age: 42 },
  ]);

  const sortByName = () => {
    const sortedByName = [...persons].sort((a, b) => a.name.localeCompare(b.name));
    setPersons(sortedByName);
  };

  const sortByAge = () => {
    const sortedByAge = [...persons].sort((a, b) => a.age - b.age);
    setPersons(sortedByAge);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TP32</h1>
      <div className="card">
        <p>
          <button
            className={count === 10 ? "disabled-button" : ""}
            disabled={count === 10}
            onClick={() => setCount((count) => count + 1)}
            style={{ cursor: count === 10 ? "not-allowed" : "pointer" }}
          >
            count is {count}
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            count is {count}
          </button>
          <button onClick={() => setIsClockRunning(true)}>
            Start clock
          </button>
        </p>
      </div>
      
      <p>La valeur est <strong>{count}</strong></p>
      <p>{count % 2 === 0 ? "pair" : "impair"}</p>
      <p>Clock is {clock}</p>

      <h2>Tableau des personnes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={sortByName}>Trier par nom</button>
      <button onClick={sortByAge}>Trier par âge</button>
    </>
  );
}

export default App;
