import { Grid, Paper, Avatar, Button, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { useMutation } from "react-query";
 import { authenticate } from "../../api/user";
import { useStyles } from "./login.styles";
import { login_shema } from "../../validations/user";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../../redux/user/user.actions";
import {Link, useHistory, useLocation} from "react-router-dom";
import toast from "../toast";


const Login = props => {
    useEffect(() => {
        if (sessionStorage.getItem('token') != null) {
            redirectToProfile();
        }
    })

const dispatch = useDispatch();
  const formik = useFormik({
    initialValues :{
    userName: "",
    password: "",
  }, validationSchema: login_shema,
  onSubmit:values => mutation.mutate(values)
    } )

  const classes = useStyles();
    const history = useHistory();

    const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  const mutation = useMutation(authenticate, {
    onSuccess: ({ user }) => {
        console.log(user);
      if(user.isAuthorized === true){
        dispatch(ActionCreators.login(user));
          notify("success", "Successfully logged in");
          redirectToProfile();
      }else{
        if (user.loginErrorCode === 0) {
          notify("error", "invalid username or passsword");
        }else if(user.loginErrorCode === 1){
          notify("error", "Please congirm email first");
        }else{
          notify("Something went wrong");
        }

      }

    },
    onError: () => {
      notify("error", "Invalid username or password, please try again!");
    },
  });

  const redirectToProfile = () => {
      history.push("/profile");
  }

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
                  <Link to="/register" onClick={()=> {history.push('/register')}}>
                    Sign up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            </Grid>
          </form>
    </Paper>
  );
};

export default Login;
