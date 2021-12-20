import React, {useState} from "react";
import toast from "../toast";
import {useMutation} from "react-query";
import {useStyles} from "./statistics.style";
import {getStatistics} from "../../api/statistics";
import DateAdapter from '@mui/lab/AdapterMoment';
import {DesktopDatePicker, LocalizationProvider} from "@mui/lab";
import {Button, TextField} from "@mui/material";

const StatisticsAdmin = () => {

    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());
    const [statistics, setStatistics] = useState();
    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({type, message});
    }, []);

    const mutation = useMutation(getStatistics, {
        onSuccess: (data) => {
            setStatistics(data);
        },
        onError: () => {
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
                            inputFormat="DD/MM/yyyy"
                            value={dateFrom}
                            onChange={(value) => setDateFrom(value)}
                            renderInput={(params) => <TextField {...params} sx={{
                                svg: {color: 'white'},
                                input: {color: 'white', borderColor: 'white'},
                                label: {color: 'white'}
                            }}/>}
                        />
                    </div>
                    <div className={classes.picker}>
                        <DesktopDatePicker
                            label="Date to:"
                            inputFormat="DD/MM/yyyy"
                            value={dateTo}
                            onChange={(value) => setDateTo(value)}
                            renderInput={(params) => <TextField {...params} sx={{
                                svg: {color: 'white'},
                                input: {color: 'white', borderColor: 'white'},
                                label: {color: 'white'}
                            }}/>}
                        />
                    </div>
                </div>
                <Button variant="contained" color="secondary"
                        className={classes.button}
                        onClick={() => {
                            mutation.mutate(dateFrom.toISOString(), dateTo.toISOString())
                        }}
                >Get</Button>

            </LocalizationProvider>

            {statistics &&
            <div className={classes.content}>

                <div className={classes.group}>
                    <div className={classes.circle} style={
                        {
                            color: '#F2EA02',
                            border: '3px solid #F2EA02',
                            boxShadow: '0 0 3px #fff,\n' +
                                '    0 0 6px #fff,\n' +
                                '    0 0 9px #fff,\n' +
                                '    0 0 12px #F2EA02,\n' +
                                '    0 0 15px #F2EA02,\n' +
                                '    0 0 18px #F2EA02;\n',
                        }}>
                        <h3>{statistics.usersCount}</h3>
                    </div>
                    <h3 className={classes.text}>Users registered</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle} style={
                        {
                            color: '#FF3300',
                            border: '3px solid #FF3300',
                            boxShadow: '0 0 3px #fff,\n' +
                                '    0 0 6px #fff,\n' +
                                '    0 0 9px #fff,\n' +
                                '    0 0 12px #FF3300,\n' +
                                '    0 0 15px #FF3300,\n' +
                                '    0 0 18px #FF3300;\n',
                        }}>
                        <h3>{statistics.moviesCount}</h3>
                    </div>
                    <h3 className={classes.text}>Movies watched</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle} style={
                        {

                            color: '#00FF66',
                            border: '3px solid #00FF66',
                            boxShadow: '0 0 3px #fff,\n' +
                                '    0 0 6px #fff,\n' +
                                '    0 0 9px #fff,\n' +
                                '    0 0 12px #00FF66,\n' +
                                '    0 0 15px #00FF66,\n' +
                                '    0 0 18px #00FF66;\n',
                        }}
                    >
                        <h3>{statistics.suggestionsCount}</h3>
                    </div>
                    <h3 className={classes.text}>Suggestions made</h3>
                </div>
                <div className={classes.group}>
                    <div className={classes.circle} style={{
                        color: '#00FFFF',
                        border: '3px solid #00FFFF',
                        boxShadow: '0 0 3px #fff,\n' +
                            '    0 0 6px #fff,\n' +
                            '    0 0 9px #fff,\n' +
                            '    0 0 12px #00FFFF,\n' +
                            '    0 0 15px #00FFFF,\n' +
                            '    0 0 18px #00FFFF;\n',
                    }}>
                        <h3>{statistics.averageRating}</h3>
                    </div>
                    <h3 className={classes.text}>Average rating</h3>
                </div>
            </div>
            }
        </>
    )
}

export default StatisticsAdmin;
