import React from 'react'

const CarDetails = ({brand, model, color}) => {
  return (
    <div>
      <h2>
         <ul>
           <li>Marca:{brand}</li>
           <li>Modelo:{model}</li>
           <li>Cor:{color}</li>
         </ul>
      </h2>
    </div>
  )
}

export default CarDetails