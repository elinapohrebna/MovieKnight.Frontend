import {Box, Button, Modal, TextField, Typography} from "@material-ui/core";
import React from "react";
import {useFormik} from "formik";
import {edit_user_shema} from "../../validations/user";
import {useStyles} from "./edit-profile.styles";

const EditProfileModal = ({open, handleClose, values}) => {

    const classes = useStyles();
    const formik = useFormik({
        initialValues :{
            userName: values.userName || '',
            email: values.email || '',
            password: values.password || '',
            newPassword: values.newPassword || '',
        }, validationSchema: edit_user_shema,
        onSubmit:values => console.log(values)
    } )

    return (<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className={classes.modal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit profile
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    fullWidth
                    name="userName"
                    placeholder="Enter your username"
                    type="text"
                />
                {formik.errors.userName && formik.touched.userName ? <div>{formik.errors.userName}</div> : null}
                <TextField
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    fullWidth
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}

                <TextField
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    fullWidth
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <TextField
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    fullWidth
                    name="newPassword"
                    placeholder="Enter new password"
                    type="password"
                />

                {formik.errors.newPassword && formik.touched.newPassword ? <div className={classes.error}>{formik.errors.newPassword}</div> : null}
                <Button className={classes.submitButton} type="submit" variant="contained" color="primary">
                    Change
                </Button>
            </form>
        </Box>
    </Modal>)
}

export default EditProfileModal;
