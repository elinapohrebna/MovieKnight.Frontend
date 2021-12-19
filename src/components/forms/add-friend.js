import {Box, Button, Modal, TextField, Typography, Grid} from "@material-ui/core";
import React from "react";
import {useFormik} from "formik";
import { useMutation } from "react-query";
import {useStyles} from "./add-friend.styles";
import { getUserByName } from "../../api/user";
import toast from "../toast";
import { useState } from "react";
import UserCard from "../card/user/user-card";

const AddFriendModal = ({open, handleClose }) => {

    const classes = useStyles();
    const [users, setUsers] = useState([])

    const mutation = useMutation(getUserByName, { 
        onSuccess: (data) => {
          setUsers(data);
          console.log(data);
         
        },
        onError: () => {
            console.log("denyed");
          notify("error", "Something went wrong");
        },
    })

        const notify = React.useCallback((type, message) => {
            toast({ type, message });
          }, []); 
    const formik = useFormik({
        initialValues :{
            userName: '',
        }, 
        onSubmit:values => mutation.mutate(values)
    } )

    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className={classes.modal}>
        <Grid container alignItems="center"  direction="row">
        <Grid item xs={12}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Search friends
            </Typography>
            </Grid>
       
            <form onSubmit={formik.handleSubmit}>
            <Grid item xs={6}>
                <TextField
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    fullWidth
                    className={classes.search}
                    name="userName"
                    placeholder="Enter username"
                    type="text"
                />
                {formik.errors.userName && formik.touched.userName ? <div>{formik.errors.userName}</div> : null}
                </Grid>
                <Grid item xs={3}>
               <Button className={classes.submitButton} type="submit" variant="contained" color="primary">
                    SEARCH
                </Button>
                </Grid>
                <Grid item xs={12} > </Grid>
                {users === [] && (<Typography>  </Typography>)}
                {users !== [] &&  users.map(user=> <UserCard key={user.id} user={user}/>) }
            </form>
            </Grid>
        </Box>
    </Modal>)
}

export default AddFriendModal;
