import React from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Stopwatch</h1>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;