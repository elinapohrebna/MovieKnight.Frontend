import {Button, CircularProgress, Icon, LinearProgress} from "@material-ui/core";
import React from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {useStyles} from "./blocks.styles";

const OthersBlock = () => {
    const classes = useStyles();


    return(
                <div className={classes.blockInformation} style={{
                    flexWrap: 'wrap',
                    gap: 10}}>
                    <Button className={classes.button} >Friends: 0 </Button>
                    <Button className={classes.button}>Films: 1 </Button>
                    <Button className={classes.button}>Lists: 0 </Button>
                    <Button className={classes.button}>Wish list: 0 </Button>
                    <Button className={classes.button}>All rates: 0 </Button>
                    <Button className={classes.button}>Something: 0000 </Button>
                </div>
    )
}


export default OthersBlock;
