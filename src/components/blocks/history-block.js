import {Button, CircularProgress, Icon, LinearProgress} from "@material-ui/core";
import React, {useState} from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {useStyles} from "./blocks.styles";

const HistoryBlock = () => {

    const classes = useStyles();
    const [history, setHistory] = useState([]);
    const [amount, setAmount] = useState(5);
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data, refetch } = useQuery("watchHistory", getUserFilms, {
        onSuccess: () => {
            if (data) {
                const filteredData = [];
                data.forEach((e) => {
                    const cond = filteredData.find((i) => (i.movie.title == e.movie.title
                )) === undefined;
                    if (cond){
                        filteredData.push(e);
                    }
                    setHistory(filteredData);
                })} else {
                refetch();
            }
            console.log(data);
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });


    return(
        <>
    {status === "success" && (
    <div className={classes.blockInformation}>
        <h2 className={classes.blockTitle}>My films:</h2>
        {history.slice(0,amount).map(item => (
            <div className={classes.item}>
                <h3 key = {item.id} className={classes.movieText}> {item.movie.title} </h3>
                <LinearProgress variant="determinate" value={100} />
            </div>)
        )}
        {(history.length > amount) &&<Button ariant='outlined' style={{color: '#000000', borderColor: '#000000'}} onClick={() => {setAmount(amount+5)
        }} endIcon={<Icon>arrow_downward_outlined</Icon>}>Load more</Button>}
    </div>
    )}
        </>
    )
}


export default HistoryBlock;
