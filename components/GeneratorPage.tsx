import { ChangeEvent, useEffect, useState } from 'react';

// MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  ...theme.spreadIt,
  title: {
    height: '10%',
    fontSize: 75,
  },
  side: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}));

const start = '\ufffc';
const end = '\ufffd';

export const GeneratorPage = (props: {
  data: any;
  pageTitle: string;
  contextLower: number;
  contextUpper: number;
  contextDefault: number;
}) => {
  const { data, pageTitle, contextLower, contextUpper, contextDefault } = props;
  const classes = useStyles();
  const [text, setText] = useState('');
  const [context, setContext] = useState(contextDefault);
  const [values, setValues] = useState<any>(undefined);

  useEffect(() => {
    let newValues: any = {};
    newValues[start] = [];
    for (let message of data) {
      let key = start;
      newValues[key].push(message[0]);
      for (let i = 0; i < message.length; i++) {
        key += message[i];
        key = key.slice(-context);
        let toadd = message[i + 1] ?? end;

        newValues[key] = newValues[key] ?? [];
        newValues[key].push(toadd);
      }
      console.log(message);
    }
  }, [context, data]);

  const generateMessage = (_: any) => {
    let message = start;
    let cont = true;
    while (cont) {
      message +=
        values[message.slice(-context)][
          Math.floor(Math.random() * values[message.slice(-context)].length)
        ];
      if (message.slice(-1) == end) {
        cont = false;
      }
    }

    setText(message.slice(1, -1));
  };

  const handleContextChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      Math.min(
        Math.max(parseInt(event.target.value), contextLower),
        contextUpper
      ) != context
    ) {
      setValues(undefined);
      setContext(
        Math.min(
          Math.max(parseInt(event.target.value), contextLower),
          contextUpper
        )
      );
    }
  };

  return (
    <div className="App">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="what have i done?" />
        <meta name="author" content="Ashvin Ranjan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="App-header-align-top">
        <div className={classes.title}>{pageTitle}</div>
        The higher the context the more coherent the messages, but if it is too
        high it just starts to copy them
        <div className={classes.side}>
          {!values ? (
            <div className={classes.column} style={{ marginTop: '15%' }}>
              Generating Map...
            </div>
          ) : (
            <>
              <div className={classes.column} style={{ marginTop: '15%' }}>
                <TextField
                  id="outlined-basic"
                  className={classes.inputField}
                  style={{
                    alignSelf: 'center',
                    justifySelf: 'center',
                    width: '25%',
                  }}
                  color="primary"
                  label="Context"
                  variant="filled"
                  onChange={handleContextChange}
                  type="number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  value={context}
                />{' '}
                <br />
              </div>
              <Button
                className={classes.button}
                style={{ alignSelf: 'center' }}
                onClick={generateMessage}
              >
                Generate Message
              </Button>
              <div className={classes.column}>{text}</div>
              <div className={classes.column} style={{ marginTop: '15%' }}>
                <Button
                  className={classes.button}
                  style={{ alignSelf: 'center' }}
                  href="/stuff"
                >
                  Back
                </Button>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default GeneratorPage;
