import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  makeStyles,
  Container,
} from "@material-ui/core";
import { useQuerry } from "../../lib/api";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 1rem 1rem",
  },
  media: {
    height: 140,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
});

export const Films = () => {
  const classes = useStyles();
  const [uri, setUri] = useState("/films");
  const { data } = useQuerry(uri);

  const changePage = (url) => {
    setUri(url.replace("http://localhost:8000/api", ""));
  };

  const handleLearnMore = (name) => {
    return navigate(`/films/${name}`);
  };

  console.log(data);
  return data ? (
    <Container>
      <Grid container direction="row" justify="flex-start">
        {data?.success?.data.map((film) => (
          <Card className={classes.root} key={film.id}>
            <CardMedia
              className={classes.media}
              image={`http://localhost:8000/api/films/images/${film.photo}`}
              title={film.name}
            />
            <CardContent>
              <div className={classes.cardHeader}>
                <Typography gutterBottom variant="h5" component="h2">
                  {film.name}
                </Typography>
                <Typography gutterBottom component="h5">
                  {film.date}
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                {film.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={(e) => handleLearnMore(film.name)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <div className={classes.footer}>
        <Button
          size="small"
          color="primary"
          disabled={data.success.prev_page_url ? false : true}
          onClick={(e) => changePage(data.success.prev_page_url)}
        >
          Previous
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={data.success.next_page_url ? false : true}
          onClick={(e) => changePage(data.success.next_page_url)}
        >
          Next
        </Button>
      </div>
    </Container>
  ) : (
    <div>Loading...</div>
  );
};
