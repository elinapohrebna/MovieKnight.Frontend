import { Grid, Button, Typography, Card, TextField} from "@material-ui/core";
import { useStyles } from "./movieComment.styles";
import {useFormik} from "formik";
import { useMutation } from "react-query";
import toast from "../../toast";

import React from "react";
import { commentFilm } from "../../../api/film";
import moment from "moment";

const MovieComment = ({movieHistory, movieId}) => {
  const classes = useStyles();
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
}, []);
  const mutation = useMutation( commentFilm, {
    onSuccess: (data) => {

    notify("success", "Your comment is added");

    },
    onError: (error) => {
        console.log("denyed");
      notify("error", "Something went wrong");
    },
})
  const formik = useFormik({
    initialValues :{
        commentText: '',
    },
    onSubmit:comment => {
        console.log(comment)
        const commentText = comment.commentText;
        const commentDate = moment().utc().format();
        const appUserId = JSON.parse(sessionStorage.getItem('user')).userId;
        const data = { id: movieId, commentText, commentDate, appUserId, movieId };
        console.log(data);
        mutation.mutate(data);
    }
} )
  return (
    <Card className={classes.paper}>
    <form onSubmit={formik.handleSubmit}>
    <Grid item xs={12}>
    <Typography> Please, add your comment</Typography>
        </Grid>
    <Grid item xs={12}>
        <TextField
            value={formik.values.commentText}
            onChange={formik.handleChange}
            fullWidth
            multiline
            rows={2}
            rowsMax={4}
            //className={classes.search}
            name="commentText"
            placeholder="Type your comment"
            type="text"
        />
        {formik.errors.commentText && formik.touched.commentText ? <div>{formik.errors.commentText}</div> : null}
        </Grid>
        <Button className={classes.button} type="submit" variant="contained" color="primary">
        Send
    </Button>
        </form>
    </Card>
  );
};

export default MovieComment ;
