import {Avatar, Button, Icon} from "@material-ui/core";
import React from "react";
import {useStyles} from "./friends-bar.styles";
import {useQuery} from "react-query";
import {getUserFriends} from "../../api/user";
import toast from "../toast";
import AddFriendModal from "../forms/add-friend";
import FriendsRows from "../blocks/friends-block";
import FriendsRequests from "../blocks/requests-block";

const FriendsBar = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const classes = useStyles();



    return (
        <div
            className={classes.friendsContainer}>
            <FriendsRows />
            <AddFriendModal open={open} handleClose={handleClose} />
            <Button variant="outlined" style={{color: '#ffffff', borderColor: '#ffffff'}} onClick={handleOpen} endIcon={<Icon>add_outlined</Icon>}>Add</Button>
            <FriendsRequests />
        </div>
    )
};

export default FriendsBar;

