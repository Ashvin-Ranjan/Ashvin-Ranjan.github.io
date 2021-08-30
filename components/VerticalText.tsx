// MUI
import {makeStyles} from "@material-ui/core/styles";
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

type VerticalTextProps = {text: string, bold?: boolean}
export default function VerticalText(props: VerticalTextProps) {
    const {text, bold} = props;
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={bold ? classes.header : ""}>{text.charAt(0)}</Box>
            <span className={classes.main}>
                {text
                    .substr(1)
                    .split("")
                    .map((v) => (
                        <>
                            {v} <br/>
                        </>
                    ))}
            </span>
        </Box>
    );
};
