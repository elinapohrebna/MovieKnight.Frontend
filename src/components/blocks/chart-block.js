import React from "react";
import {useStyles} from "./blocks.styles";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {Chart} from "react-google-charts";

const FavoritesBlock = () => {
    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data } = useQuery("watchHistory", getUserFilms, {
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    const res = () => {

        console.log(dict);
        var dict = {};

        data.map(item => {
            if (item.movie.genres instanceof Array){
                item.movie.genres.map(e => {
                    if (dict[e]) {
                        dict[e]++;
                    }  else {
                        dict[e] = 1;
                    }
                })
            } else {
                if (dict[item.movie.genres]) {
                    dict[item.movie.genres]++;
                }  else {
                    dict[item.movie.genres] = 1;
                }
            }} )

        var res = [];
        Object.keys(dict).forEach(key => {
            res.push([key, dict[key]]);
        });
        res.unshift(['Genres', 'Amount of films']);
        console.log(res);

        return res;
    }


    return(
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
    )
}


export default FavoritesBlock;
