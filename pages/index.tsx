import {ReactNode} from 'react';
import Link from 'next/link';

// MUI
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    letters: {
        marginRight: "5%",
        fontSize: "400%",
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
}));

export default function Home() {
    const classes = useStyles();

    function TypographyLink(props: {href: string, children: ReactNode}) {
        return (
            <Typography className={classes.letters}>
                <Link href={props.href}>
                    <a className={classes.link}>
                        {props.children}
                    </a>
                </Link>
            </Typography>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <div /* className={classes.header} */>
                    <div className={classes.container}>
                        <TypographyLink href="/about">A</TypographyLink>
                        <TypographyLink href="/stuff">s</TypographyLink>
                        <TypographyLink href="/help">h</TypographyLink>
                        <TypographyLink href="/.github">.</TypographyLink>
                        <TypographyLink href="/videos">v</TypographyLink>
                        <TypographyLink href="/internals">i</TypographyLink>
                        <TypographyLink href="/N">n</TypographyLink>
                    </div>
                </div>
            </header>
        </div>
    );
};
