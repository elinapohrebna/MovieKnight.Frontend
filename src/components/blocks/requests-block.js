import {Avatar, Icon, IconButton} from "@material-ui/core";
import React, {useEffect} from "react";
import {useStyles} from "./blocks.styles";
import {useMutation, useQuery} from "react-query";
import {getUserFriendsRequests, putToFriends} from "../../api/user";
import toast from "../toast";
import {friendsRequestStatuses} from '../../consts';
import moment from "moment";

const RequestRow = ({name, img, id, notify, setIsFetching}) => {
    const classes = useStyles();
    const userId = JSON.parse(sessionStorage.getItem('user')).userInfo.userId;
    const status = friendsRequestStatuses.Accepted;

    const mutation = useMutation('AddToFriends',
        () => putToFriends(id, userId, status, moment().utc().format()), {
            onSuccess: () => {
                setIsFetching(true);
            },
            onError: () => {
                notify("error", "An error occured");
            },
        });

    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
            <IconButton variant="outlined" style={{color: '#ffffff', borderColor: '#ffffff', borderWidth: '3px'}} onClick={() => {
                mutation.mutate(id, friendsRequestStatuses.Accepted)
            }}><Icon>add_outlined</Icon></IconButton>
        </div>
    )
};

const FriendsRequests = () => {
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

    const {status, data, refetch } = useQuery("getFriendsRequests", getUserFriendsRequests, {
        onSuccess: () => {
            if (data !== undefined) setRequests(data);
            else refetch();
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Requests to you</h2>
            {(requests && requests.length > 0) ? requests.map((item, i) => (
                <RequestRow key={i} notify={notify} name={item.sender.userName} img={item.sender.userPhoto} id={item.senderId} setIsFetchin={setIsFetching}/>
            )) : <h2 className={classes.text}><p>You have no requests( </p></h2>}
            </div>
    )
};

export default FriendsRequests;

