import React from 'react'
import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Anderson", "Bárbara", "Luna"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Anderson", age: 27 },
    { id: 2, name: "Bárbara", age: 27 },
    { id: 3, name: "Luna", age: 2 }
  ])
const deleteRandom = () => {
  const  randomNumber = Math.floor(Math.random() * 4);

  setUsers((prevUsers) => {

    return prevUsers.filter((user) => randomNumber !== user.id);

  });
}
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
            <button onClick={deleteRandom}>Delete random</button>
    </div>
  )
}

export default ListRender