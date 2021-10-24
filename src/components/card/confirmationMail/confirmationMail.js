import { Grid, Button, Typography, Card } from "@material-ui/core";
import { useStyles } from "./confirmationMail.styles";
import { useMutation } from "react-query";
import toast from "../../toast";
import { confirmMail } from "../../../api/user";
import { useLocation } from "react-router-dom";
import React from "react";
import { useHistory} from "react-router-dom"; 

const ConfirmationMail = () => {
  const classes = useStyles();
  const history = useHistory();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const email = new URLSearchParams(search).get('email');
  const creds = {token, email};

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []); 

  const mutation = useMutation(confirmMail, {
    onSuccess: ({ user }) => {
      notify("success", "Email confirmed");
      history.push('/login');
    },
    onError: () => {
      notify("error", "Email hasn't been confirmed!");
    },
  });

  const buttonClicked = () => {
    mutation.mutate(creds);
  }

  return (
    <Card className={classes.paper}>
      <Grid container direction="column" alignItems="center">
        <Typography color="primary" variant="h5">
          Please, confirm your email
        </Typography>
        <Grid item xs={12}>
        <Button className={classes.button}  variant="contained" color="primary" onClick={buttonClicked}>
        Confirm
      </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ConfirmationMail;