// React
import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: 75,
    marginBottom: "-1%",
  },
  main: {
    fontSize: 30,
  },
  container: {
    display: "inline-block",
  },
}));

const VerticalText = ({ text, bold }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {bold ? (
        <h1 className={classes.header}>{text.charAt(0)}</h1>
      ) : (
        <Box>{text.charAt(0)}</Box>
      )}
      <span className={classes.main}>
        {text
          .substr(1)
          .split("")
          .map((v) => (
            <>
              {v} <br />
            </>
          ))}
      </span>
    </Box>
  );
};

export default VerticalText;
