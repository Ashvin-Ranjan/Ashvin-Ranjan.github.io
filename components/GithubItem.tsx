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
      <div className={classes.content}>
        <CardActionArea>
          <a
            href={repo.html_url}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="h5" component="div">
              {repo.name}
            </Typography>
          </a>
        </CardActionArea>
        <div className={classes.description}>
          <Typography sx={{ fontSize: 14 }}>
            {repo.description ?? ""}
          </Typography>
        </div>
        <Typography sx={{ fontSize: 14 }}>
          Language: {repo.language ?? "none"}
        </Typography>
        <div className={classes.stars}>
          <StarIcon />
          <Typography sx={{ fontSize: 14 }} style={{ paddingLeft: "1%" }}>
            {repo.stargazers_count}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
