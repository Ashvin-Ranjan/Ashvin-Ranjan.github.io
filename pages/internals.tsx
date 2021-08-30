import VerticalText from "../components/VerticalText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    side: {
        display: "flex",
        flexDirection: "row",
    },
    column: {
        display: "flex",
        flexDirection: "column",
    },
    paddingBottom: {
        paddingBottom: "50%",
    },
    paddingHorizontal: {
        padding: "0px 5%",
    },
}));

export default function Internals() {
    const classes = useStyles();
    return (
        <div className="App">
            <header className="App-header">
                <div className={classes.side}>
                    <div className={classes.paddingHorizontal}>
                        <VerticalText text="アッシュ・ドット・ビンの内部詳細"/>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.paddingBottom}>hello</div>
                        <div className={classes.paddingBottom}>kya</div>
                    </div>
                </div>
            </header>
        </div>
    );
};
