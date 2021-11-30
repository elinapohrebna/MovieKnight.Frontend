import {Grid, Button, Typography, Card} from "@material-ui/core";
import {useStyles} from "./movieComments.styles";
import {useQuery} from "react-query";
import toast from "../../toast";
import React from "react";
import CommentCard from "../commentCard/commentCard";
import {getCommentsByMovieId} from "../../../api/film";

const MovieComments = ({film}) => {
    const movieId = film.id;
    const classes = useStyles();
    const [comments, setComments] = React.useState([]);
    const {status, data} = useQuery('movieId',
        () => getCommentsByMovieId(movieId).then((data)=> setComments(data)) 
       );
       console.log(comments)
    const notify = React.useCallback((type, message) => {
        toast({type, message});
    }, []);

    return (
        <Card className={classes.paper}>
            <Grid container direction="column" alignItems="center">
                {comments.length === 0 && (<Typography> This film has no comments yet </Typography>)}
                {comments.length !== 0 &&  comments.map((movie, index) => <CommentCard key={index} movie={movie}/>)}
            </Grid>
        </Card>
    );
};

export default MovieComments;
