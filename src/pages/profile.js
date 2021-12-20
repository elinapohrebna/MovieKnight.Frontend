import React, {useState} from "react";
import {Avatar, Box, Button, Icon, IconButton, LinearProgress} from "@material-ui/core";
import {useStyles} from "./profile.styles";
import {Chart} from "react-google-charts";
import {roles, storyVisibility} from "../consts";
import toast from "../components/toast";

import {InputLabel, Select, MenuItem} from '@mui/material';

import EditProfileModal from "../components/forms/edit-profile";
import FriendsBar from "../components/bars/friends-bar";
import HistoryBlock from "../components/blocks/history-block";
import OthersBlock from "../components/blocks/others-block";
import FavoritesBlock from "../components/blocks/favorites-block";
import ChartBlock from "../components/blocks/chart-block";
import AdminBar from "../components/bars/admin-bar"
import {updateWatchHistoryVisibility} from "../api/user"

const Profile = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = JSON.parse(sessionStorage.getItem('user')).userInfo;
    const [watchHistoryVisibility, setWatchHistoryVisibility] = React.useState(user?.storyVisibility);

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);


    const onWatchHistoryVisibilityChanged = (event) => {
        const watchHistoryVisibility = Number(event.target.value);

        const response = updateWatchHistoryVisibility(watchHistoryVisibility);

        if (response) {
            // updating session storage info
            const userSessionInfo = JSON.parse(sessionStorage.getItem('user'));
            userSessionInfo.userInfo.storyVisibility = watchHistoryVisibility;
            sessionStorage.setItem('user', JSON.stringify(userSessionInfo));

            // updating state
            setWatchHistoryVisibility(watchHistoryVisibility);

            notify("success", "Watch history visibility was changed successfully")
        }
    }

    return (
    <div className={classes.wrapper}>
        {user?.role !== roles.admin && (<FriendsBar />)}
            <div className={classes.mainContainer}>
                <div className={classes.topPanel} style={{backgroundImage: `url('https://t4.ftcdn.net/jpg/02/65/47/89/240_F_265478985_bCmREx1Nhesun2rfL3fOGtLYVif2NAeo.jpg')`}}>
                </div>
                <div className={classes.userBlock}>
                    <Avatar className={classes.avatar} />
                              <div className={classes.userInfo}>
                        <h2 className={classes.username}>{user.username}</h2>
                        <h3 className={classes.otherInfo}>{user.role}</h3>
                        <h3 className={classes.otherInfo}>{`Join at ${((user.registryDate).split('T'))[0]}`}</h3>
                        {user?.role !== roles.admin && (<div className="watchHistoryConfiguration">
                            <p className={classes.watchHistoryVisibility}>Watch history visibility:</p>
                            <div>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={watchHistoryVisibility}
                                    label="Age"
                                    onChange={onWatchHistoryVisibilityChanged}
                                    className={classes.select}
                                    MenuProps={{
                                        sx: {
                                            "&& .Mui-selected": {
                                                backgroundColor: '#6869AC',
                                                color: '#F1EEE9',
                                                height: '30px'
                                            }
                                        }
                                    }}
                                >
                                    <MenuItem
                                        className={classes.menuItem} value={storyVisibility.private}>Private</MenuItem>
                                    <MenuItem className={classes.menuItem}  value={storyVisibility.friendsOnly}>Friends Only</MenuItem>
                                    <MenuItem className={classes.menuItem}  value={storyVisibility.public}>Public</MenuItem>
                                </Select>
                            </div>
                        </div>)}
                    </div>
                    <IconButton size={'small'} className={classes.editButton} aria-label="edit" onClick={handleOpen} >
                        <Icon>edit_outlined </Icon>
                    </IconButton>
                    <EditProfileModal open={open} handleClose={handleClose} values={{userName: user.userName, email: user.email, password: user.password, newPassword:  user.newPassword}}/>
                </div>
                {user?.role !== roles.admin && (<div className={classes.blocksWrapper}>
                    <HistoryBlock />
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
