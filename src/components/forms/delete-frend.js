import {Box, Button, Modal, TextField, Typography, Grid} from "@material-ui/core";
import React from "react";
import {useFormik} from "formik";
import { useMutation } from "react-query";
import {useStyles} from "./delete-friend.styles";
import { deleteUserFriend } from "../../api/user";
import toast from "../toast";
import { useState } from "react";
import UserCard from "../card/user/user-card";

const DeleteFriendModal = ({open, handleClose, id}) => {

    const classes = useStyles();
    const [users, setUsers] = useState([])

    const mutation = useMutation(deleteUserFriend, { 
        onSuccess: (data) => {
            notify("success", "This friend has been deleted");
         
        },
        onError: () => {
            console.log("denyed");
          notify("error", "Something went wrong");
        },
    })

        const notify = React.useCallback((type, message) => {
            toast({ type, message });
          }, []); 
    

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
            Do you want to delete? This action is irreversible
            </Typography>
            </Grid>
                <Grid item xs={3}>
               <Button className={classes.buttonDelete}  onClick={()=> {
                   mutation.mutate(id)

               }}>
                    Delete
                </Button>
                </Grid>
            </Grid>
        </Box>
    </Modal>)
}

export default DeleteFriendModal;
