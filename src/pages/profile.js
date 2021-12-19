import React, {useState} from "react";
import {Avatar, Box, Button, Icon, IconButton, LinearProgress} from "@material-ui/core";
import {useStyles} from "./profile.styles";
import {Chart} from "react-google-charts";
import {roles} from "../consts"; 

import EditProfileModal from "../components/forms/edit-profile";
import FriendsBar from "../components/bars/friends-bar";
import HistoryBlock from "../components/blocks/history-block";
import OthersBlock from "../components/blocks/others-block";
import FavoritesBlock from "../components/blocks/favorites-block";
import ChartBlock from "../components/blocks/chart-block";
import AdminBar from "../components/bars/admin-bar"

const Profile = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = JSON.parse(sessionStorage.getItem('user')).userInfo;

    return (
    <div className={classes.wrapper}>
        {user?.role !== roles.admin && (<FriendsBar />)}
            <div className={classes.mainContainer}>
                <div className={classes.topPanel} style={{backgroundImage: `url('https://www.widsmob.com/wp-content/uploads/2018/02/skyline-panoramic-photography.jpg')`}}>
                </div>
                <div className={classes.userBlock}>
                    <Avatar className={classes.avatar}
                            src={'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'}/>
                    <div className={classes.userInfo}>
                        <h2 className={classes.username}>{user.username}</h2>
                        <h3 className={classes.otherInfo}>{user.role}</h3>
                        <h3 className={classes.otherInfo}>{`Join at ${((user.registryDate).split('T'))[0]}`}</h3>
                    </div>
                    <IconButton size={'small'} className={classes.editButton} aria-label="edit" onClick={handleOpen} >
                        <Icon>edit_outlined </Icon>
                    </IconButton>
                    <EditProfileModal open={open} handleClose={handleClose} values={{userName: user.userName, email: user.email, password: user.password, newPassword:  user.newPassword}}/>
                </div>
                {user?.role !== roles.admin && (<div className={classes.blocksWrapper}>
                    <HistoryBlock />
                    <OthersBlock />
                    <FavoritesBlock/>
                    <ChartBlock />
                </div>)}
                {user?.role === roles.admin && 
                <div className={classes.adminBar}>
                    <AdminBar />
                </div>}
                </div>
        </div>
)
};

export default Profile;
