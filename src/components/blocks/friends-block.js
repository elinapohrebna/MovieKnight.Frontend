import {Avatar, Button, Icon} from "@material-ui/core";
import React, {useEffect} from "react";
import {useStyles} from "./blocks.styles";
import {useQuery} from "react-query";
import {getUserFriends} from "../../api/user";
import toast from "../toast";
import DeleteFriendModal from "../forms/delete-frend";
import {useHistory} from "react-router-dom";

const FriendRow = ({name, img, item, friends}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const history = useHistory();

    const redirectToFriendPage = (item, friends) => {
        sessionStorage.setItem('friend', JSON.stringify(item));
        sessionStorage.setItem('friends', JSON.stringify(friends));
        history.push("/friend")
    }

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return(
        <div className={classes.friendRow}>
            <Avatar src={img} onClick={()=> redirectToFriendPage(item, friends) }/>
            <h3 className={classes.friendName} onClick={()=>  redirectToFriendPage(item, friends) }>{name}</h3>
            <Button className={classes.buttonDelete} onClick={handleOpen}> Delete </Button>
            <DeleteFriendModal open={open} handleClose={handleClose} id={item.id}/>
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

    useEffect(()=>{
        refetch();
    }, [])

    const {status, data, refetch } = useQuery("getFriends", getUserFriends, {
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
        onSuccess: () => {
            if (data !== undefined) 
            {setFriends(data);
            
            }
            else refetch();
        }
    });

    return (
        <div
            className={classes.friendsContainer}
        >
            <h2 className={classes.blockTitle} >Friends</h2>
            {(friends && friends.length > 0) ? friends.map((item, i) => (
                <FriendRow key={i} name={item.username} friends={friends} img={item.userPhoto} item={item}/>
            )) : <h2 className={classes.text}><p>You have no friends yet( </p>
                <p>But you can find some</p></h2>}
        </div>
    )
};

export default FriendsRows;

