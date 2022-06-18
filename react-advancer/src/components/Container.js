import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
      <h2>O título do Container</h2>
    {children}
    <p>O valor é : {myValue}</p>
    </div>
  )
}

export default Container