import { ChangeEvent, useState } from "react";

// Data
import data from "./bbsmg.json";

// MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


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

const start = "\ufffc";
const end = "\ufffd";

export default function BecauseBreadStarredMessageGeneator() {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [context, setContext] = useState(3);

    let values: any = {};

    values[start] = [];

    for (let message of data) {
        let key = start;
        values[key].push(message[0])
        for (let i = 0; i < message.length; i++) {
            key += message[i]
            key = key.slice(-context)
            let toadd = message[i + 1] ?? end;

            values[key] = values[key] ?? []
            values[key].push(toadd)
        }
    }


    const generateMessage = (_: any) => {
        let message = start;
        let cont = true;
        while (cont) {
            message += values[message.slice(-context)][Math.floor(Math.random() * values[message.slice(-context)].length)]
            if (message.slice(-1) == end) {
                cont = false
            }
        }

        setText(message.slice(1, -1))
    };

    const handleContextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContext(Math.min(Math.max(parseInt(event.target.value), 1), 6))
    }

    return (
        <div className="App">
            <header className="App-header-align-top">
                <div className={classes.title}>Because Bread Starred Message Generator</div>
                The higher the context the more coherent the messages, but if it is too high it just starts to copy them
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
                            label="Context"
                            variant="filled"
                            onChange={handleContextChange}
                            type="number"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            value={context}
                        /> <br />
                    </div>
                        <Button
                            className={classes.button}
                            style={{alignSelf: "center"}}
                            onClick={generateMessage}
                        >
                            Geneate Message
                        </Button>
                    <div className={classes.column}>
                        {text}
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
