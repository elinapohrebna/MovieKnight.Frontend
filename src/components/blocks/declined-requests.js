import {Avatar, Icon, IconButton} from "@material-ui/core";
import React, {useEffect} from "react";
import {useStyles} from "./blocks.styles";
import {useQuery} from "react-query";
import {getDeclinedRequestsFromUser} from "../../api/user";
import toast from "../toast";

const DeclinedRequestRow = ({name, img }) => {
    const classes = useStyles();
    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
        </div>
    )
};

const DeclinedRequests = () => {
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

    const {status, data, refetch } = useQuery("getDeclinedRequestsFromUser", getDeclinedRequestsFromUser, {
        onError: () => {
            refetch();
            notify("error", "An error occured, please reload this page!");
        },
        onSuccess: () => {
            if (data !== undefined) setRequests(data);
            else refetch();
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Declined requests</h2>
            {(status && requests && requests.length > 0) ? requests.map((item, i) => (
                <DeclinedRequestRow key={i} notify={notify} name={item.receiver.userName} img={item.receiver.userPhoto} id={item.receiverId} setIsFetchin={setIsFetching}/>
            )) : <h2 className={classes.text}><p>You have no requests( </p></h2>}
        </div>
    )
};

export default DeclinedRequests;

