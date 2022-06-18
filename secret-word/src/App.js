// CSS
import './App.css';
// React
import { useCallback, useEffect, useState } from 'react';
// Data
import {wordsList} from "./data/words";
// Components
import StarScreen from './components/StarScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

const [pickedWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [letters, setLetters] = useState([]);

const pickWordAndCategory = () => {
  // pick a random category
  const categories = Object.keys(words);
  const category = 
  categories[Math.floor(Math.random() * Object.keys(categories).length)];

  console.log(category);
//pick a random word
const word = 
  words[category][Math.floor(Math.random() * words[category].length)]

console.log(word);  

return { word, category }
};


  // Starts the secret word game
  const startGame = () => {
    // pick word and pick category
    const{ word, category } = pickWordAndCategory();

      //create an array of letters
      let wordLetters = word.toLowerCase().split('')

    console.log(word, category);
    console.log(wordLetters);

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)


    setGameStage(stages[1].name);
  };

  //process the letter imput
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  console.log(words)
  return (
    <div className="App">
        {gameStage === 'start' &&<StarScreen startGame={startGame} />}
        {gameStage === 'game' &&<Game verifyLetter={verifyLetter} />}
        {gameStage === 'end' &&<GameOver retry={retry}/>}
    </div>
  );
}

export default App;
