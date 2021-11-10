import { Grid, Button, Typography, Card } from "@material-ui/core";
import { useStyles } from "./movieComments.styles";
import { useQuery } from "react-query";
import toast from "../../toast";
import React from "react";
import CommentCard from "../commentCard/commentCard";
import { getCommentsByMovieId } from "../../../api/film";

const MovieComments = (movie) => {
    console.log(movie.film)
    const movieId = movie.film.id;
  const classes = useStyles();
  const [comments, setComments] = React.useState([]);
  const { status, data } = useQuery( movieId , getCommentsByMovieId, {
    onError: () => {
      notify("error", "An error occured, please reload this page!");
    },
    onSuccess: (data) => {
        setComments(data)
    }
  });

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []); 

  return (
    <Card className={classes.paper}>
      <Grid container direction="column" alignItems="center">
      {comments === [] && (<Typography> This film has no comments yet </Typography>)}
      {comments !== [] &&  comments.map(movie=> <CommentCard key={movie.id} movie={movie}/>) }
        </Grid>
    </Card>
  );
};

export default MovieComments ;