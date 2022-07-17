import N5_DATA from "../../../data/japanese/n5.json";
import { Definition } from "../../../util/types/jp";
import WordDisplay from "../../../components/jp/WordDisplay";

import { useState } from "react";

const TYPED_DATA = N5_DATA as Definition[];

const randomDefinition = () => TYPED_DATA[Math.floor(Math.random() * TYPED_DATA.length)];

export default function N5Flashcards() {
  let [currentWord, setCurrentWord] = useState(randomDefinition());

  return (
    <div className='App'>
      <header className='App-header'>
        <WordDisplay word={currentWord} /><br />
        {currentWord.definitions[0][0]}
      </header>
    </div>
  );
}
