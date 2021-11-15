import VerticalText from "../components/VerticalText";
import GithubItem, { Repo } from "../components/GithubItem";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  side: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  paddingBottom: {
    paddingBottom: "50%",
  },
  paddingHorizontal: {
    padding: "0px 5%",
  },
}));

export default function Internals() {
  let [items, setItems] = useState<Repo[]>([]);

  fetch("https://api.github.com/users/Ashvin-Ranjan/repos").then((v) =>
    v.json().then((i) => {
      setItems(i);
    })
  );

  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.side}>
          <div className={classes.paddingHorizontal}>
            <h1>
              <VerticalText text="Github Feed" />
            </h1>
          </div>
          <div className={classes.column}>
            {items.map((v) => (
              <GithubItem repo={v} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
