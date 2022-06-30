import React from 'react'

import { useParams } from 'react-router-dom'

const Info = () => {

  const { id } = useParams();
  return (
    <div>
      
      <h1>Main informações legais: {id}</h1>
    </div>
  )
}

export default Info