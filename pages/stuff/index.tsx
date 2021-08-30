import VerticalText from "../../components/VerticalText";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ...theme.spreadIt,
    side: {
        display: "flex",
        flexDirection: "row",
        minHeight: "100%",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-between",
        width: "85%",
        paddingTop: "2%",
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "100%",
    },
    title: {
        paddingLeft: "5%",
        paddingRight: "5%",
        width: "15%",
    },
}));

const Stuff = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <header className="App-header-align-top">
                <div className={classes.side}>
                    <div className={classes.title}>
                        <h1>
                            <VerticalText bold text="Stuff"/>
                        </h1>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.buttons}>
                            <Button
                                className={classes.button}
                                style={{alignSelf: "center"}}
                                href="/stuff/rune"
                            >
                                Rune Text Generator
                            </Button>
                            <Button
                                className={classes.button}
                                style={{alignSelf: "center"}}
                                href="/stuff/cyrillic"
                            >
                                Cyrllic Text Generator
                            </Button>
                            <Button
                                className={classes.button}
                                style={{alignSelf: "center"}}
                                href="/stuff/similar"
                            >
                                Similar Text Generator
                            </Button>
                            <Button
                                className={classes.button}
                                style={{alignSelf: "center"}}
                                href="/stuff/comment_sorter"
                            >
                                Comment Sorter
                            </Button>
                        </div>
                        <Button
                            className={classes.button}
                            style={{alignSelf: "center"}}
                            href="/"
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Stuff;
