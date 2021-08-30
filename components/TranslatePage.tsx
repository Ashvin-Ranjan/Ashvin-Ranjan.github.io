import {ChangeEvent, useState} from "react";

// MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

// Components
import TranslatedText from "./TranslatedText";


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

type TranslatePageProps = {
    name: string, dictionary: {[key: string]: string},
    allowLowercase?: boolean, highlightUntranslated?: boolean
}
export default function TranslatePage(props: TranslatePageProps) {
    const {name, dictionary, allowLowercase, highlightUntranslated} = props;

    const classes = useStyles();
    const [text, setText] = useState("");

    const handleGenerate = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <div className="App">
            <header className="App-header-align-top">
                <div className={classes.title}>{name}</div>
                <div className={classes.side}>
                    <div className={classes.column} style={{marginTop: "15%"}}>
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
                            translate={dictionary}
                            text={text}
                            allowLowercase={allowLowercase}
                            highlightUntranslated={highlightUntranslated}
                        />
                    </div>
                    <div className={classes.column} style={{marginTop: "15%"}}>
                        <Button
                            className={classes.button}
                            style={{alignSelf: "center"}}
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
