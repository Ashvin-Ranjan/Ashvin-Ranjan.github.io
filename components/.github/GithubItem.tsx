import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardActionArea } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "25%",
    margin: "2.5% 3%",
    backgroundColor: "#111111",
    color: "#ffffff",
    textAlign: "left",
    height: "auto",
    textDecoration: "none",
    minHeight: "15vh",
  },
  content: {
    padding: "2.5%",
    width: "100%",
    height: "100%",
  },
  description: {
    minHeight: "15%",
    color: "#aaaaaa",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    fontSize: "20px",
  },
}));

export interface Repo {
  name: string;
  html_url: string;
  language?: string;
  stargazers_count: number;
  description?: string;
}

export default function GithubItem({ repo }: { repo: Repo }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea style={{ height: "100%" }}>
        <a
          href={repo.html_url}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className={classes.content}>
            <Typography variant="h5" component="div">
              {repo.name}
            </Typography>
            <div className={classes.description}>
              <Typography style={{ fontSize: 14 }}>
                {repo.description ?? ""}
              </Typography>
            </div>
            <Typography style={{ fontSize: 14 }}>
              Language: {repo.language ?? "none"}
            </Typography>
            <div className={classes.stars}>
              <StarIcon />
              <Typography style={{ fontSize: 14, paddingLeft: "1%" }}>
                {repo.stargazers_count}
              </Typography>
            </div>
          </div>
        </a>
      </CardActionArea>
    </Card>
  );
}
