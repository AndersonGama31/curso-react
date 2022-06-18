import React from 'react'

const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e);
    console.log("ATIVOU O EVENTO");
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => {console.log("clicou")}
        }>Clique</button>
      </div>
    </div>
  )
}

export default Events