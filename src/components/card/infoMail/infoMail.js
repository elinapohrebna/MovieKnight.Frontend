import { Grid, Button, Typography, Card } from "@material-ui/core";
import { useStyles } from "./infoMail.styles";

import React from "react";

const InfoMail = () => {
  const classes = useStyles();


  return (
    <Card className={classes.paper}>
      <Grid container direction="column" alignItems="center">
        <Typography color="primary" variant="h5">
          We have send a message to your email, please check it to complete your registration
        </Typography>
        </Grid>
    </Card>
  );
};

export default InfoMail ;