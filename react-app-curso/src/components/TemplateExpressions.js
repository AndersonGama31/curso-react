import React from 'react'

const TemplateExpressions =()=>{
  const name="Anderson"
  const data = {
    age: 31,
    job: "Programmer"

  }
  return (
    <div>
      <h4>Olá {name}</h4>
      <p>Você atua como :{data.job} e tem a idade de {data.age}</p>
    </div>
  )
}

export default TemplateExpressions