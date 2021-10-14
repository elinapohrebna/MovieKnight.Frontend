import { Grid, Paper, Avatar, Button, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { useMutation } from "react-query";
 import { authenticate } from "../../api/user";
import { useStyles } from "./login.styles";
import { login_shema } from "../../validations/user";
import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../../redux/user/user.actions"; 

 import toast from "../toast";


const Login = props => {
const dispatch = useDispatch();

  const formik = useFormik({
    initialValues :{
    userName: "",
    password: "",
  }, validationSchema: login_shema,
  onSubmit:values => mutation.mutate(values)
    } )

  const classes = useStyles();

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []); 

  const mutation = useMutation(authenticate, {
    onSuccess: ({ user }) => {
        dispatch(ActionCreators.login(user));
      notify("success", "Successfully logged in");
    },
    onError: () => {
        console.log("denyed");
      notify("error", "Invalid username or password, please try again!");
    },
  });

  return (
    <Paper className={classes.paper} elevation={20}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Avatar className={classes.avatar} />
        <h2>Sign In</h2>
      </Grid>
          <form onSubmit={formik.handleSubmit}>
           <Grid container alignItems="center">
           <Grid item className={classes.container} xs={12}>
           <TextField
             value={formik.values.userName}
             onChange={formik.handleChange}
             fullWidth
             name="userName"
             placeholder="Enter your username"
             type="text"
           />
           
         </Grid>
            <Grid item className={classes.container} xs={12}>
              <TextField
                value={formik.values.password}
                onChange={formik.handleChange}
                fullWidth
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              
            </Grid>
            <Grid item className={classes.buttonAllign} xs ={12}>
              <Button className={classes.button} type="submit" variant="contained" color="primary">
                Sign in
              </Button>
            </Grid>
            <Grid className={classes.containerLink} container direction="row">
              <Grid item xs={12}>
                <Typography variant="body1">
                  Don't have an account?{" "}
                  <Button className={classes.signUpBtn} href="/register">
                    Sign up
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            </Grid>
          </form>
    </Paper>
  );
};

export default Login; 
