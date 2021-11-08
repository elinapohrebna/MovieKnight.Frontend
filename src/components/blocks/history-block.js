import {Button, CircularProgress, Icon, LinearProgress} from "@material-ui/core";
import React from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {useStyles} from "./blocks.styles";

const HistoryBlock = () => {

    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data } = useQuery("watchHistory", getUserFilms, {
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    return(
        <>
    {status === "success" && (
    <div className={classes.blockInformation} style={{
        overflow: 'scroll',
        overflowX: 'hidden'}}>
        <h2 className={classes.blockTitle}>My films:</h2>
        {data.map(item => (
            <>
                <h3 key = {item.id} className={classes.movieText}> {item.movie.title} </h3>
                <LinearProgress variant="determinate" value={100} />
            </>)
        )}
        <Button ariant='outlined' style={{color: '#000000', borderColor: '#000000'}} onClick={() => {
        }} endIcon={<Icon>arrow_downward_outlined</Icon>}>Load more</Button>
    </div>
    )}
        </>
    )
}


export default HistoryBlock;
