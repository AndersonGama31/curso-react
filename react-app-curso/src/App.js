import './components/FirstComponents'
import './App.css';
import FirstComponents from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <p className='paragrafo'>E aí beleza?</p>
      <FirstComponents />
      <TemplateExpressions />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
