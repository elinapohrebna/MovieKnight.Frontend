import {Avatar, Button, Icon} from "@material-ui/core";
import React from "react";
import {useStyles} from "./blocks.styles";
import {useQuery} from "react-query";
import {getUserFriends} from "../../api/user";
import toast from "../toast";

const FriendRow = ({name, img}) => {
    const classes = useStyles();
    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
        </div>
    )
};

const FriendsRows = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [open, setOpen] = React.useState(false);
    const [friends, setFriends] = React.useState(undefined);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const classes = useStyles();
    const {status, data } = useQuery("getFriends", getUserFriends, {
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
        onSuccess: () => {
            setFriends(data);
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Friends</h2>
            {(friends && friends.length > 0) ? friends.map((item, i) => (
                <FriendRow key={i} name={item.userName} img={item.userPhoto}/>
            )) : <h2 className={classes.text}><p>You have no friends yet( </p>
                <p>But you can find some</p></h2>}
            </div>
    )
};

export default FriendsRows;

