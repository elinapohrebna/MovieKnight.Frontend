import {Avatar, Button, Icon, IconButton} from "@material-ui/core";
import React from "react";
import {useStyles} from "./blocks.styles";
import {useMutation, useQuery} from "react-query";
import {getUserFriendsRequests, putToFriends} from "../../api/user";
import toast from "../toast";
import friendsRequestStatuses from '../../consts';
import moment from "moment";

const RequestRow = ({name, img, id, notify}) => {
    const classes = useStyles();
    const userId = JSON.parse(sessionStorage.getItem('user')).userId;

    const mutation = useMutation('AddToFriends',
        (id, status) => putToFriends(id, userId, status, moment().utc().format()), {
            onSuccess: () => {
            },
            onError: () => {
                notify("error", "Invalid username or password, please try again!");
            },
        });

    return(
        <div className={classes.friendRow}>
            <Avatar src={img}/>
            <h3>{name}</h3>
            <IconButton variant="outlined" style={{color: '#ffffff', borderColor: '#ffffff', borderWidth: '3px'}} onClick={() => {
                console.log({senderId: id, friendRequestStatus: (friendsRequestStatuses.Accepted), requestDate: moment().utc().format()});
                mutation.mutate(id, friendsRequestStatuses.Accepted)
            }}><Icon>add_outlined</Icon></IconButton>
        </div>
    )
};

const FriendsRequests = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
    const [open, setOpen] = React.useState(false);
    const [requests, setRequests] = React.useState(undefined);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const classes = useStyles();
    const {status, data,refetch } = useQuery("getFriendsRequests", getUserFriendsRequests, {
        onError: () => {
            refetch();
            notify("error", "An error occured, please reload this page!");
        },
        onSuccess: () => {
            console.log(data);
            setRequests(data);
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Requests</h2>
            {(requests && requests.length > 0) ? requests.map((item, i) => (
                <RequestRow key={i} notify={notify} name={item.sender.userName} img={item.sender.userPhoto} id={item.senderId}/>
            )) : <h2 className={classes.text}><p>You have no requests( </p></h2>}
            </div>
    )
};

export default FriendsRequests;

