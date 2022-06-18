const Challenge = () => {
  const a = 1;
  const b = 5;

  return (
    <div>
      <p>A:{a}</p>
      <p>B:{b}</p>
      <button onClick={() => console.log(a+b)}>Some</button>
    </div>
  )

}
export default Challenge