import {Grid, Avatar, Button, Typography, Card, CardHeader, CardContent, IconButton} from "@material-ui/core";
import { useStyles } from "./commentCard.styles";
import { useMutation } from "react-query";
import toast from "../../toast";
import React from "react";
import { sendFriendRequest } from "../../../api/user";
import { Movie } from "@material-ui/icons";
import moment from "moment";

const CommentCard = ({movie}) => {
  const classes = useStyles();

  console.log('Movie', movie);

  console.log('DB', movie.commentDate);
  var gmtDateTime = moment.utc(movie.commentDate);
  console.log('UTC', gmtDateTime);
  var local = gmtDateTime.local().format('YYYY MMM DD | HH:mm');
  console.log('Local', local);

  return (
    <Card className={classes.paper}>
      <CardHeader
          avatar={
            <Avatar sx={{ width: 72, height: 72 }} src={'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'} />
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={movie.appUser.userName}
          subheader=
              {  local}
      />
      <CardContent>
        <Typography className={classes.title} variant="body1">
          {movie.commentText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard ;
