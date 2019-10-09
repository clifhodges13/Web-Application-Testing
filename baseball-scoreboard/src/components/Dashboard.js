import React, { useState } from 'react'

export default function Dashboard() {

  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  function strike() {
    if(strikes === 3) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  function ball() {
    if (balls === 4) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }

  function foul() {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }

  function hit() {
    setStrikes(0)
    setBalls(0)
  }

  const pitchResults = [strike, ball, foul, hit]

  const handlePitch = (randomize) => randomize()

  return (
    <div>
      <button onClick={handlePitch(pitchResults[Math.floor(Math.random() * pitchResults.length)])}>Pitch!</button>
    </div>
  )
}
