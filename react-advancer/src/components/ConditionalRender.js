import { useState } from "react"

const ConditionalRender = () => {
  const  [x] = useState(false);
  const [name, setName] = useState("Anderson");
  return (
    <div>
      <h1>Isso será Exibido?</h1>
      {x && <p>Se x for true, sim!</p> }
      {!x &&<p>Agora x é falso</p>}
      {name === "Anderson" ? (
        <div>
          <p>"O nome é Anderson"</p>
        </div>
        
      ) : (
        <div>
        <p>"O nome é outro!"</p>
      </div>
        
      )}
      <button onClick={()=> setName("Anderson")}>Rename</button>
    </div>
  )

}

export default ConditionalRender