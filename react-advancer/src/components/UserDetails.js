
const UserDetails = ({name, age, occupation }) => {
  return (
    <div>
    <h2>
      <ul>
        <li>Nome:{name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {occupation}</li>
        {age > 18 ? ( <li>Pode tirar carteira de habilitação</li>) : ( <li>Menor de idade</li> )}
        
        

      </ul>
    </h2>
    </div>
  )
}

  export default UserDetails


