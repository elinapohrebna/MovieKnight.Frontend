import React, {useState} from "react";
import {Avatar, Box, Button, Icon, IconButton, LinearProgress} from "@material-ui/core";
import {useStyles} from "./profile.styles";
import {Chart} from "react-google-charts";

import EditProfileModal from "../components/forms/edit-profile";
import FriendsBar from "../components/bars/friends-bar";
import HistoryBlock from "../components/blocks/history-block";
import OthersBlock from "../components/blocks/others-block";
import FavoritesBlock from "../components/blocks/favorites-block";
import ChartBlock from "../components/blocks/chart-block";
import { useHistory } from "react-router-dom";
import HistoryFriendBlock from "../components/blocks/history-friend-block";
import FavoritesFriendBlock from "../components/blocks/favorites-friend-block";
import ChartFriendBlock from "../components/blocks/chart-friend-block";

const FriendProfile = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const friend = JSON.parse(sessionStorage.getItem('friend'));
    console.log(friend);

    return (
    <div className={classes.wrapper}>
            <div className={classes.mainContainer}>
                <div className={classes.topPanel} style={{backgroundImage: `url('https://www.widsmob.com/wp-content/uploads/2018/02/skyline-panoramic-photography.jpg')`}}>
                </div>
                <div className={classes.userBlock}>
                    <Avatar className={classes.avatar}
                            src={'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'}/>
                    <div className={classes.userInfo}>
                        <h2 className={classes.username}>{friend.userName}</h2>
                        <h3 className={classes.otherInfo}>{friend.role}</h3>
                        <h3 className={classes.otherInfo}>{`Join at ${((friend.registryDate).split('T'))[0]}`}</h3>
                    </div>
                    <div className={classes.backButton} >
                    <Button onClick={() => {history.push("/profile");}} > Back to Profile </Button>
                    </div>
                </div>
                <div className={classes.blocksWrapper}>
                    <HistoryFriendBlock watchHistory={friend.watchHistory}/>
                    <OthersBlock />
                    <FavoritesFriendBlock watchHistory={friend.watchHistory}/>
                    <ChartFriendBlock watchHistory={friend.watchHistory}/>
                </div>
                </div>
        </div>
)
};

export default FriendProfile;
