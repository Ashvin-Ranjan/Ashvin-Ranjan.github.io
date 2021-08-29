// React
import React, { useState } from "react";

// Mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// Similar translate table
import similar from "../../data/similar.json";
import TranslatedText from "../../components/TranslatedText";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadIt,
  title: {
    height: "10%",
    fontSize: 75,
  },
  side: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  column: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

const SimilarTextGenerator = () => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleGenerate = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header-align-top">
        <div className={classes.title}>Similar Text Generator</div>
        <div className={classes.side}>
          <div className={classes.column} style={{ marginTop: "15%" }}>
            <TextField
              id="outlined-basic"
              className={classes.inputField}
              style={{
                alignSelf: "center",
                justifySelf: "center",
                width: "25%",
              }}
              color="primary"
              label="Text"
              variant="filled"
              onChange={handleGenerate}
            />
          </div>
          <div className={classes.column}>
            <TranslatedText
              translate={similar}
              text={text}
              allowLowercase
              highlightUntranslated
            />
          </div>
          <div className={classes.column} style={{ marginTop: "15%" }}>
            <Button
              className={classes.button}
              style={{ alignSelf: "center" }}
              href="/stuff"
            >
              Back
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SimilarTextGenerator;
