import React from 'react'

export default function Display(props) {
  return (
    <div>
      <div>
       <h3>Strikes : {props.strikes}</h3>
       <h3>Balls : {props.balls}</h3>
      </div>
    </div>
  )
}
