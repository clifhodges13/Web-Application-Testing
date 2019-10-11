import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [strikes, setStrikes] = useState(0)
  console.log('Strikes', strikes)
  const [balls, setBalls] = useState(0)
  console.log('Balls', balls)

  const handleStrike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const handleBall = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const handleFoul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const handleHit = () => {
    setStrikes(0)
    setBalls(0)
  }

  return (
    <div className="App">
      <div className="scoreboard-wrapper">
        <Display strikes={strikes} balls={balls}/>
        <Dashboard 
          handleBall={handleBall}
          handleStrike={handleStrike}
          handleFoul={handleFoul}
          handleHit={handleHit}
        />
      </div>
    </div>
  );
}

export default App;
