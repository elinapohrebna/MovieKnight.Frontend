import React, {useState} from "react";
import {useStyles} from "./blocks.styles";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {Chart} from "react-google-charts";

const ChartFriendBlock = ({watchHistory}) => {
    const classes = useStyles();
    const [history, setHistory] = useState(watchHistory);

    const res = () => {
        var dict = {};
        history.map(item => {
            const i = item.movie.genres.split(', ');
            if (i instanceof Array){
                i.map(e => {
                    if (dict[e]) {
                        dict[e]++;
                    }  else {
                        dict[e] = 1;
                    }
                })
            } else {
                if (dict[i]) {
                    dict[i]++;
                }  else {
                    dict[i] = 1;
                }
            }} )

        var res = [];
        Object.keys(dict).forEach(key => {
            res.push([key, dict[key]]);
        });
        res.unshift(['Genres', 'Amount of films']);
        return res;
    }

    return(
        <>
        <div className={classes.blockInformation}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 className={classes.blockTitle}>Favourite genres:</h2>
                <Chart
                    className={classes.chart}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={res()
                        }
                    options={{
                        title: '',
                    }}
                />
            </div>
        </div>
        </>
    )
}


export default ChartFriendBlock;
