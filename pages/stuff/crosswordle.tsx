import { useEffect, useState } from 'react';

import VerticalText from '../../components/general/VerticalText';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import WordleSquare from '../../components/stuff/WordleSquare';

const API_KEY = `https://Crosswordle.asra.repl.co`;

const useStyles = makeStyles((theme) => ({
  ...theme.spreadIt,
  side: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '85%',
    paddingTop: '2%',
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '100%',
    marginBottom: '5%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginRight: '5%',
  },
  title: {
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '15%',
  },
}));

export interface SquareData {
  letter?: string;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

interface Position {
  x: number;
  y: number;
}

interface WordData {
  word: string;
  at: number;
}

export type ColorState = 'green' | '#b59f3b' | '#333333' | 'transperent';

const Crosswordle = () => {
  const classes = useStyles();
  const [originalBoardWords, setOriginalBoardWords] = useState<WordData[][][]>(
    []
  );
  const [boardState, setBoardState] = useState<ColorState[][]>([]);
  const [data, setData] = useState<SquareData[][]>([]);
  const [selected, setSelected] = useState<Position | null>(null);
  const [direction, setDirection] = useState<'down' | 'right'>('right');

  useEffect(() => {
    (async () => {
      const res = await fetch(API_KEY);
      const value = await res.json();
      setBoardState(
        value.array.map((row: string[]) => {
          return row.map((_) => 'transperent');
        })
      );
      setData(
        value.array.map((row: string[], i: number) => {
          return row.map((letter: string, j: number) => {
            console.log(i, j);
            return {
              letter: letter && ' ',
              up:
                !!(value.array[i - 1] ?? [])[j] &&
                (value.array[i - 1] ?? [])[j] != ' ',
              down:
                !!(value.array[i + 1] ?? [])[j] &&
                (value.array[i + 1] ?? [])[j] != ' ',
              left: !!value.array[i][j - 1] && value.array[i][j - 1] != ' ',
              right: !!value.array[i][j + 1] && value.array[i][j + 1] != ' ',
            };
          });
        })
      );
      setOriginalBoardWords(value.wordArray);
    })();
  }, []);

  useEffect(() => {
    window.onkeydown = (event) => {
      if (
        event.key.length != 1 ||
        !selected ||
        !data[selected.y][selected.x].letter
      )
        return event.key != ' ';
      console.log(direction);
      if (data[selected.y][selected.x].right && direction == 'right') {
        let newData = data;
        newData[selected.y][selected.x] = {
          ...newData[selected.y][selected.x],
          letter: event.key.toLowerCase(),
        };
        setData(newData);
        setSelected({
          ...selected,
          x: selected.x + 1,
        });
        setDirection('right');
      } else if (data[selected.y][selected.x].down) {
        let newData = data;
        newData[selected.y][selected.x] = {
          ...newData[selected.y][selected.x],
          letter: event.key.toLowerCase(),
        };
        setData(newData);
        setSelected({
          ...selected,
          y: selected.y + 1,
        });
        setDirection('down');
      } else {
        let newData = data;
        newData[selected.y][selected.x] = {
          ...newData[selected.y][selected.x],
          letter: event.key.toLowerCase(),
        };
        setData(newData);
        setSelected(null);
        setDirection('right');

        // Checking words
        setBoardState(
          data.map((row: SquareData[], i: number): ColorState[] => {
            return row.map((data: SquareData, j: number): ColorState => {
              if (!data.letter || data.letter == ' ') return 'transperent';
              if (originalBoardWords[i][j][0].word.indexOf(data.letter) == -1)
                return '#333333';
              if (
                originalBoardWords[i][j][0].word[
                  originalBoardWords[i][j][0].at
                ] == data.letter
              )
                return 'green';
              return '#b59f3b';
            });
          })
        );
      }
      return event.key != ' ';
    };

    return () => {
      window.onkeydown = null;
    };
  }, [selected, direction, originalBoardWords, data]);

  return (
    <div className='App'>
      <header className='App-header-align-top'>
        <div className={classes.side}>
          <div className={classes.title}>
            <h1>
              <VerticalText bold text='Crosswordle' />
            </h1>

            <Button href='/' style={{ color: 'white', fontSize: 30 }}>
              ≪
            </Button>
          </div>
          <div className={classes.column}>
            <div className={classes.board}>
              {data.map((row, i) => (
                <div className={classes.row}>
                  {row.map((v, j) => (
                    <WordleSquare
                      selected={
                        !!selected && i == selected.y && j == selected.x
                      }
                      data={v}
                      onClick={() => {
                        setDirection('right');
                        setSelected({ y: i, x: j });
                      }}
                      correctState={boardState[i][j]}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Crosswordle;
