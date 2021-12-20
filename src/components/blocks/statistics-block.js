import React, {useState} from "react";
import toast from "../toast";
import {useMutation} from "react-query";
import {useStyles} from "./statistics.style";
import {getStatistics} from "../../api/statistics";
import DateAdapter from '@mui/lab/AdapterMoment';
import {LocalizationProvider, DesktopDatePicker} from "@mui/lab";
import {Button, TextField} from "@mui/material";

const StatisticsAdmin = () => {

    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [statistics, setStatistics] = useState(undefined);
    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({type, message});
    }, []);

    const mutation = useMutation(getStatistics, {
        onSuccess: (data) => {
            setStatistics(data);
            console.log(data);

        },
        onError: () => {
            console.log("denyed");
            notify("error", "Something went wrong");
        },
    })

    return (
        <>
            <LocalizationProvider dateAdapter={DateAdapter}>
                <div className={classes.wrapper}>
                    <div className={classes.picker}>
                        <DesktopDatePicker
                            label="Date from:"
                            className={classes.picker}
                            inputFormat="DD/MM/yyyy"
                            value={dateFrom}
                            onChange={(value) => setDateFrom(value)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className={classes.picker}>
                        <DesktopDatePicker
                            label="Date to:"
                            inputFormat="DD/MM/yyyy"
                            value={dateTo}
                            onChange={(value) => setDateTo(value)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                </div>
                <Button variant="contained" color="primary"
                        className={classes.button}
                        onClick={() => {
                            mutation.mutate(dateFrom.toISOString(), dateTo.toISOString())
                        }}
                        >Get</Button>

            </LocalizationProvider>

            {statistics &&
            <div className={classes.content}>

                <div className={classes.group}>
                    <div className={classes.circle}>
                        <h3>{statistics.usersCount}</h3>
                    </div>
                    <h3 className={classes.text}>Users registered</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle}>
                        <h3>{statistics.moviesCount}</h3>
                    </div>
                    <h3 className={classes.text}>Movies watched</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle}>
                        <h3>{statistics.suggestionsCount}</h3>
                    </div>
                    <h3 className={classes.text}>Suggestions made</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle}>
                        <h3>{statistics.averageRating}</h3>
                    </div>
                    <h3 className={classes.text}>Average rating:</h3>
                </div>
            </div>
            }
        </>
    )
}

export default StatisticsAdmin;
