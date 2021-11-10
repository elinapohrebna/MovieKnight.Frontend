import { Grid, Button, Typography, Card } from "@material-ui/core";
import { useStyles } from "./commentCard.styles";
import { useMutation } from "react-query";
import toast from "../../toast";
import React from "react";
import { sendFriendRequest } from "../../../api/user";
import { Movie } from "@material-ui/icons";

const CommentCard = (movie) => {
  const classes = useStyles();
  


  return (
    <Card className={classes.paper}>
      <Grid container direction="raw" alignItems="center">
      <Grid item xs={9} >
        <Typography className={classes.title} variant="body1">
        {movie.movie.movieText}
        </Typography>
        </Grid>
       
        </Grid>
       
    </Card>
  );
};

export default CommentCard ;