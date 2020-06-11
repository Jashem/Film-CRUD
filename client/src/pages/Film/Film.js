import React from "react";
import { useQuerry } from "../../lib/api";
import {
  Container,
  Paper,
  makeStyles,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: 350,
    height: 300,
  },

  details: {
    marginRight: "1rem",
  },
  divider: {
    margin: "0 0 1rem",
  },
  description: {
    margin: "0 1rem",
  },
  comment: {
    marginLeft: "1rem",
    "& p": {
      marginLeft: "1rem",
    },
  },
});

export const Film = ({ name }) => {
  const classes = useStyles();
  const { data } = useQuerry(`/films/name/${name}`);
  console.log(data);
  return data ? (
    <Container>
      <Paper variant="outlined">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <img
            src={`http://localhost:8000/api/films/images/${data.success.photo}`}
            alt="Thumbnail"
            className={classes.image}
          />
          <div className={classes.details}>
            <Typography gutterBottom variant="h3" component="h2">
              {data.success.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Date: {data.success.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Genre: {data.success.genre}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Price: {data.success.price}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Ticket: {data.success.ticket}
            </Typography>
          </div>
        </Grid>
        <Divider
          orientation="horizontal"
          varient="fullWidth"
          className={classes.divider}
        />
        <div className={classes.description}>
          <Typography gutterBottom variant="h5" component="h2">
            Description:
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {data.success.description}
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography gutterBottom variant="h5" component="h2">
            Comments:
          </Typography>
          {data.success.comments.map((comment) => (
            <div className={classes.comment}>
              <Typography gutterBottom variant="h6" component="subtitle1">
                {comment.name}:
              </Typography>
              <Typography gutterBottom variant="body2" component="p">
                {comment.comment}
              </Typography>
              <Divider
                orientation="horizontal"
                varient="fullWidth"
                className={classes.divider}
              />
            </div>
          ))}
        </div>
      </Paper>
    </Container>
  ) : (
    <div>Loading...</div>
  );
};
