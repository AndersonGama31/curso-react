import './App.css';
import MyComponent from './components/MyComponent';
import Title from './Title';

function App() {
  const n = 15;
  const redTitle = true
  return (
    <div className="App">
      {/*CSS GLOBAL*/}
      <h1>CSS no React!</h1>
      {/* CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do componente</p>
      {/*CSS inline*/}
      <p style={{ color:"white", backgroundColor:"green"}}>Esse parágrafo por estilizado inline</p>
      {/*CSS com inline dinâmico*/ }
      <p style={n > 10 ? {color: "white"} : {color: "blue"} }>inline dinamico</p>
      {/*Classes dinâmicas*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>
      {/*CSS Modules*/}
      <Title />
    </div>
  );
}

export default App;
