import {Button, CircularProgress, Icon, LinearProgress} from "@material-ui/core";
import React, {useState} from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserByName, getUserFilms} from "../../api/user";
import {useStyles} from "./blocks.styles";
import { CropLandscapeOutlined } from "@material-ui/icons";

const HistoryFriendBlock = ({watchHistory}) => {

    const classes = useStyles();
  // const [history, setHistory] = useState([]);
    const [amount, setAmount] = useState(5);
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);
   watchHistory.map(item=> console.log(item.id));


    return(
        <>
  
    <div className={classes.blockInformation}>
        <h2 className={classes.blockTitle}>My films:</h2>
        {watchHistory.slice(0,amount).map(item => (
            <div className={classes.item}>
                <h3 key = {item.id} className={classes.movieText}> {item.movie.title} </h3>
                <LinearProgress variant="determinate" value={100} />
            </div>)
        )}
        {(watchHistory.length > amount) &&<Button ariant='outlined' style={{color: '#000000', borderColor: '#000000'}} onClick={() => {setAmount(amount+5)
        }} endIcon={<Icon>arrow_downward_outlined</Icon>}>Load more</Button>}
    </div>

        </>
    )
}


export default HistoryFriendBlock;
