import {Avatar, Icon, IconButton} from "@material-ui/core";
import React, {useEffect} from "react";
import {useStyles} from "./blocks.styles";
import {useMutation, useQuery} from "react-query";
import { getRequestsFromUser } from "../../api/user";
import toast from "../toast";
import friendsRequestStatuses from '../../consts';
import moment from "moment";

const UserRequestRow = ({name, img }) => {
    const classes = useStyles();
    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
        </div>
    )
};

const UserFriendsRequests = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [requests, setRequests] = React.useState(undefined);
    const [isFetching, setIsFetching] = React.useState(false);
    const classes = useStyles();

    useEffect(()=>{
        refetch();
        setIsFetching(false);
    }, [isFetching])

    const {status, data, refetch } = useQuery("getRequestsFromUser", getRequestsFromUser, {
        onError: () => {
            refetch();
            notify("error", "An error occured, please reload this page!");
        },
        onSuccess: () => {
            console.log(data);
            if (data !== undefined) setRequests(data);
            else refetch();
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Requests from  you</h2>
            {(requests && requests.length > 0) ? requests.map((item, i) => (
                <UserRequestRow key={i} notify={notify} name={item.receiver.userName} img={item.receiver.userPhoto} id={item.receiverId} setIsFetchin={setIsFetching}/>
            )) : <h2 className={classes.text}><p>You have no requests( </p></h2>}
            </div>
    )
};

export default UserFriendsRequests;

