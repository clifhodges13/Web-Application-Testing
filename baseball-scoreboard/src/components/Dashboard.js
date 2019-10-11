import React from 'react'

export default function Dashboard(props) {

  return (
    <div>
      <button className="pitch-button" onClick={props.handleStrike}>Strike</button>
      <button className="pitch-button" onClick={props.handleBall}>Ball</button>
      <button className="pitch-button" onClick={props.handleFoul}>Foul</button>
      <button className="pitch-button" onClick={props.handleHit}>Hit!</button>
    </div>
  )
}
