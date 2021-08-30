// React
import {useState, useEffect} from "react";

// Mui
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

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

type Comment = {id: string, content: string, author: string}
export default function CommentSorter() {
    const classes = useStyles();
    const [comment, setComment] = useState<Comment | null>(null);

    const URL_LINK = "https://youtube-comment-selection-backend.asra.repl.co";

    const regenerateComment = () => {
        fetch(`${URL_LINK}/random_comment`).then((commentResponse) => {
            if (!commentResponse.ok) {
                throw new Error(`HTTP error ${commentResponse.status}`);
            }
            commentResponse.json().then((c) => setComment(c));
        });
    };

    const submitAnswer = (isSpam: boolean) => () => {
        fetch(
            `${URL_LINK}/catagorize_comment/${comment!.id}/${isSpam.toString()}`,
            {
                method: "POST",
                body: "{}",
            }
        );
        regenerateComment();
    };

    useEffect(() => {
        regenerateComment();
    }, []);

    return (
        <div className="App">
            <header className="App-header-align-top">
                <div className={classes.title}>Youtube Comment sorter</div>
                <div className={classes.side}>
                    {!comment ? (
                        <div className={classes.column} style={{marginTop: "5%"}}>
                            Uh Oh! The backend API is down, please let me know that this is
                            happening and I will try to fix it if this does not stop in 5
                            minutes.
                        </div>
                    ) : (
                        <>
                            <div className={classes.column} style={{marginTop: "5%"}}>
                                Decide whether a comment is spam or not spam, this will be used
                                later for a machine learning algorithm <br/>
                                The way to decide is to see whether it links a random youtube
                                video, or if there is repetitive phrases or self-promotion.
                            </div>
                            <div className={classes.column} style={{marginTop: "1%"}}>
                                From @{comment.author}:<br/>"{comment.content.split("\n")[0]}
                                {comment.content
                                    .split("\n")
                                    .slice(1)
                                    .map((v) => (
                                        <>
                                            <br/>
                                            {v}
                                        </>
                                    ))}
                                "
                            </div>
                            <div className={classes.column} style={{marginTop: "5%"}}>
                                <Button
                                    className={classes.button}
                                    style={{alignSelf: "center", marginRight: "2%"}}
                                    onClick={submitAnswer(true)}
                                >
                                    Spam
                                </Button>
                                <Button
                                    className={classes.button}
                                    style={{alignSelf: "center", marginRight: "2%"}}
                                    onClick={submitAnswer(false)}
                                >
                                    Not Spam
                                </Button>
                                <Button
                                    className={classes.button}
                                    style={{alignSelf: "center"}}
                                    onClick={regenerateComment}
                                >
                                    Next
                                </Button>
                            </div>
                        </>
                    )}
                    <div className={classes.column} style={{marginTop: "5%"}}>
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
