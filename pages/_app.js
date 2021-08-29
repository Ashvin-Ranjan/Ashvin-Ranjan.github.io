import { ThemeProvider } from "@material-ui/core/styles";
import themeFile from "../util/theme";

import "../styles/App.css";
import "../styles/index.css"


function App({ Component, pageProps }) {
    return (
        <div className="main-background" style={{ backgroundColor: "#282c34" }}>
            <ThemeProvider theme={themeFile}>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
}

export default App;
