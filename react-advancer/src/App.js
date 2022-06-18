
import './App.css';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import  Fragmento  from './components/Fragmento';
import Container from './components/Container';
import UserDetails from './components/UserDetails';





function App() {
  const name = "Joaquim"

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelha", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Preta", newCar: true, km: 12554 },
    { id: 3, brand: "Renault", color: "Azul", newCar: true, km: 234 }
  ]

  const users = [
    {id:10, name :"Anderson" , age: 27 , occupation: "Developer" },
    {id:11, name :"Bárbara" , age: 27 , occupation: "Developer" },
    {id:12, name :"Luna" , age: 12 , occupation: "Dog" }
  ]

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails brand="BMW" color="Branco" model="Esportivo" />
      <CarDetails brand="VW" color="Preto " model="Hatch" />
      <CarDetails brand="MERCEDES" color="Vermelho" model="Sedan" />
      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} 
          />
    ))}
  <Fragmento />


  <Container>
    <p>Familia</p>
    </Container>


    {/*ATIVIDADE ANDERSON*/}

{users.map((user) => (
      <UserDetails 
    key={user.id}
    name = {user.name}
    age = {user.age}
    occupation = {user.occupation}/>

              ))}
  
  </div>
  );

}

export default App;


