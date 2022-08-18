import N5_DATA from '../../data/japanese/n5.json';
import { Definition } from '../../util/types/jp';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  ...theme.spreadIt,
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    width: '100%',
  },
}));

const TYPED_DATA = N5_DATA as Definition[];

const displayWord = (def: Definition, only_primary = false) => {
  if (def.main_kana == '') {
    return def.main_reading;
  } else {
    let primary = def.only_kana ? def.main_kana : def.main_reading;
    let secondary = def.only_kana ? def.main_reading : def.main_kana;
    return only_primary ? primary : `${primary} 「${secondary}」`;
  }
};

const shuffle = (arr: number[]) => {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const randomWords = () => {
  let arr = [];
  while (arr.length < 4) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) == -1) arr.push(r);
  }
  return arr;
};

export default function N5Flashcards() {
  const classes = useStyles();

  let [words, setWords] = useState(randomWords());
  let [displayJapanese, setDisplayJapanese] = useState(false);
  let [noHelper, setNoHelper] = useState(false);

  let shuffleMap = shuffle([0, 1, 2, 3]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);

    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
  }, [words]);

  const handleKeypress = (e: KeyboardEvent) => {
    console.log(shuffleMap[+e.key - 1]);
    if (+e.key < 5 && +e.key > 0) {
      checkCorrect(words[shuffleMap[+e.key - 1]]);
    }
  };

  const checkCorrect = (numb: number) => {
    let display = displayWord(
      TYPED_DATA[words[0]],
      !displayJapanese || noHelper
    );

    if (numb == words[0]) {
      toast(`You got ${display} correct`);
    } else {
      toast.error(
        `${display} was actually "${TYPED_DATA[words[0]].definitions[0][0]}"`
      );
    }
    setWords(randomWords());
  };

  return (
    <div className='App'>
      <header className='App-header'>
        {displayJapanese
          ? displayWord(TYPED_DATA[words[0]], noHelper)
          : TYPED_DATA[words[0]].definitions[0][0]}
        <br />
        {shuffleMap.map((v, i) => (
          <Button
            className={classes.button}
            style={{ alignSelf: 'center' }}
            onClick={() => {
              checkCorrect(words[v]);
            }}
          >
            ({i + 1}){' '}
            {displayJapanese
              ? TYPED_DATA[words[v]].definitions[0][0]
              : displayWord(TYPED_DATA[words[v]], noHelper)}
          </Button>
        ))}
        <div style={{ paddingTop: '5%' }}>
          <Button
            className={classes.button}
            style={{ alignSelf: 'center' }}
            onClick={() => {
              setDisplayJapanese((v) => !v);
              setWords(randomWords());
            }}
          >
            {displayJapanese
              ? 'Test English to Japanese'
              : 'Test Japanese to English'}
          </Button>{' '}
          <br />
          <Button
            className={classes.button}
            style={{ alignSelf: 'center' }}
            onClick={() => {
              setNoHelper((v) => !v);
              setWords(randomWords());
            }}
          >
            {noHelper ? 'Enable non-main reading' : 'Disable non-main reading'}
          </Button>
        </div>
        <ToastContainer position='bottom-right' />
      </header>
    </div>
  );
}
