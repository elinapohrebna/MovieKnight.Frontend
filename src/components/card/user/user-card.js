import { Grid, Button, Typography, Card } from "@material-ui/core";
import { useStyles } from "./user-card.styles";
import { useMutation } from "react-query";
import toast from "../../toast";
import React from "react";
import { sendFriendRequest } from "../../../api/user";
import { useHistory } from "react-router-dom";

const UserCard = (user) => {
  const classes = useStyles();
  const history = useHistory();
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []); 
  const mutation = useMutation(sendFriendRequest, { 
    onSuccess: (data) => {
     notify("success", "Friend request has been sent");
     
    },
    onError: () => {
        console.log("denyed");
      notify("error", "Something went wrong");
    },
})
const handleClick = () => { 
    
    mutation.mutate(user.user)
};
const handleProfile = (item) => { 
    
  sessionStorage.setItem('friend', JSON.stringify(item));
  history.push("/friend")
  console.log(item);
};

  return (
    <Card className={classes.paper}>
      <Grid container direction="raw" alignItems="center">
      <Grid item xs={6} >
        <Typography className={classes.title} variant="body1">
        {user.user.userName}
        </Typography>
        </Grid>
        <Grid item xs={3} >
        <Button  onClick={()=> {handleProfile(user.user)}} >
        See profile
        </Button>
        </Grid>
        <Grid item xs={3} >
        <Button  onClick={handleClick} >
        Add friend
        </Button>
        </Grid>
        </Grid>
    </Card>
  );
};

export default UserCard ;