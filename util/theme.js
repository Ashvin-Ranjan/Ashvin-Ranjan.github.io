import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
    },
  },
  spreadIt: {
    button: {
      backgroundColor: "#4CAFFF",

      textAlign: "center",
      fontSize: "25px",
      padding: "10px 5px",
      color: "white",

      outlineStyle: "none",
      border: "none",
      cursor: "pointer",

      marginTop: "25px",

      /*position:fixed;*/
      minWidth: "10%",
    },
    error: {
      color: "red",
    },
    inputField: {
      backgroundColor: "white",
    },
  },
});

export default theme;