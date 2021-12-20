import {Grid, Paper, Avatar, Button, TextField, Typography} from "@material-ui/core";
import {useFormik} from "formik";
import {useMutation} from "react-query";
import {create} from "../../api/user";
import {useStyles} from "./register.styles";
import {register_shema} from "../../validations/user";
import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import toast from "../toast";


const Register = () => {

    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        if (sessionStorage.getItem('token') !== null) {
            history.push('/profile');
        }
    })

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }, validationSchema: register_shema,
        onSubmit: values => mutation.mutate(values)
    });


    const notify = React.useCallback((type, message) => {
        toast({type, message});
    }, []);

    const mutation = useMutation(create, {
        onSuccess: ({user}) => {
            notify("success", "Your registration went successfully");
            history.push("/infoMail");
        },
        onError: () => {
            console.log("denyed");
            notify("error", "Something went wrong");
        },
    });

    return (
        <Paper className={classes.paper} elevation={20}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Avatar className={classes.avatar}/>
                <h2 style={{color: '#F1EEE9'}}>Sign Up</h2>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
                <Grid container alignItems="center">
                    <Grid item className={classes.container} xs={12}>
                        <TextField
                            InputProps={{
                                classes: {input: classes.textField}
                            }}
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            fullWidth
                            name="userName"
                            placeholder="Enter your username"
                            type="text"
                        />
                        <Grid item className={classes.container} xs={12}>
                            <TextField
                                InputProps={{
                                    classes: {input: classes.textField}
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                fullWidth
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            {formik.errors.email && formik.touched.email ? <div className={classes.text}>{formik.errors.email}</div> : null}
                        </Grid>

                    </Grid>
                    <Grid item className={classes.container} xs={12}>
                        <TextField
                            InputProps={{
                                classes: {input: classes.textField}
                            }}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            fullWidth
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                        />
                        {formik.errors.password && formik.touched.password ? <div className={classes.text}>{formik.errors.password}</div> : null}

                    </Grid>
                    <Grid item className={classes.container} xs={12}>
                        <TextField
                            InputProps={{
                                classes: {input: classes.textField}
                            }}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            fullWidth
                            name="confirmPassword"
                            placeholder="Enter your password once more"
                            type="password"
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword ?
                            <div className={classes.text}>{formik.errors.confirmPassword}</div> : null}
                    </Grid>
                    <Grid item className={classes.buttonAllign} xs={12}>
                        <Button className={classes.button} type="submit" variant="contained" color="secondary">
                            Sign up
                        </Button>
                    </Grid>
                    <Grid className={classes.containerLink} container direction="row">
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default Register;
