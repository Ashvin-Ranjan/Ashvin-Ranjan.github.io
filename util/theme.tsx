import {createTheme} from "@material-ui/core/styles";
import {CSSProperties} from "@material-ui/styles";

// Augment createTheme module to support custom variable
declare module "@material-ui/core/styles/createTheme" {
    interface Theme {
        // Need to list each explicitly or else spreading this in createTheme will not add the specific classnames to the Record
        // Actually pretty intelligent
        spreadIt: {
            button: CSSProperties
            error: CSSProperties
            inputField: CSSProperties
        }
    }
    interface ThemeOptions {
        spreadIt: {
            button: CSSProperties
            error: CSSProperties
            inputField: CSSProperties
        }
    }
}

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
