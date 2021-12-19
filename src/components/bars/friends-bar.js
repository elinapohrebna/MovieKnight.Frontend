import {Avatar, Button, Icon, Radio, RadioGroup} from "@material-ui/core";
import React from "react";
import {useStyles} from "./friends-bar.styles";
import {useQuery} from "react-query";
import {getUserFriends} from "../../api/user";
import toast from "../toast";
import AddFriendModal from "../forms/add-friend";
import FriendsRows from "../blocks/friends-block";
import FriendsRequests from "../blocks/requests-block";
import UserFriendsRequests from "../blocks/user-requests-block";
import RadioButton from "../buttons/radio-button";

const FriendsBar = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const handleChange = (value) => {
        setPage(parseInt(value, 10));
    };

    const PendingRequest = () => {
        return (
            <UserFriendsRequests />
        )
    }

    const ToUserRequests = () => {
        return (
            <FriendsRequests />
        )
    }

    const Friends = () => {
        return (
            <>
                <FriendsRows />
                <AddFriendModal open={open} handleClose={handleClose} />
                <Button variant="outlined" style={{color: '#ffffff', borderColor: '#ffffff'}} onClick={handleOpen} endIcon={<Icon>add_outlined</Icon>}>Add</Button>
        </>
        )
    }

    const DeclinedRequests = () => {
        return (
            <DeclinedRequests />
        )
    }

    const pages = [
        Friends, ToUserRequests, PendingRequest, //DeclinedRequests
    ]


    return (

        <div
            className={classes.friendsContainer}>
            {pages[page]()}
            <div className={classes.radioGroup}>
                {pages.map((e, index) => (
                    <RadioButton checked={index === page} handleClick={() => handleChange(index)} />
                ))}
            </div>
        </div>

    )
};


export default FriendsBar;

