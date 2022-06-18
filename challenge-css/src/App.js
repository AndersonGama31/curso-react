
import './App.css';
import Car from './Components/Car';



function App() {
  const myCars = [
    { name: "Ferrari", color: "Vermelha", km: 0 },
    { name: "KIA", color: "Preta", km: 12554 },
    { name: "Renault", color: "Azul", km: 234 }
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className='car-container'>
        {myCars.map((car) => (
          <Car car = {car} />
        ))}
      </div>
  
    </div>
  );
}

export default App;
