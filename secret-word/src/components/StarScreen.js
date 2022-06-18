import React from 'react'
import "./StarScreen.css";

const StarScreen = ({startGame}) => {
  return (
    <div className='Start'>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogas</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StarScreen