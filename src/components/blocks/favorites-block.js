import React, {useState} from "react";
import {useStyles} from "./blocks.styles";
import toast from "../toast";
import {useQuery} from "react-query";
import {getUserFilms} from "../../api/user";
import {CircularProgress} from "@material-ui/core";

const FavoritesBlock = () => {
    const classes = useStyles();
    const [history, setHistory] = useState([]);
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data } = useQuery("watchHistory", getUserFilms, {
        onSuccess: () => {
            if (data) {
                const filteredData = [];
                data.forEach((e) => {
                    const cond = filteredData.find((i) => (i.movie.title == e.movie.title
                    )) === undefined;
                    if (cond){
                        filteredData.push(e);
                    }
                    filteredData.sort((a, b) => {
                        return b.rating - a.rating;
                    });
                    setHistory(filteredData);
                })}
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });


    return(
        <>
            {status === "success" && (
        <div className={classes.blockInformation}>
            <h2 className={classes.blockTitle}>Favourite films:</h2>
            <table className={classes.table}>
                <thead className={classes.tableTitle}>
                <tr>
                    <th>Rank</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Rate</th>
                </tr>
                </thead>
                {history.map((item, i) => (
                        <tr>
                            <td>{i+1}</td>
                            <td>{item.movie.title}</td>
                            <td>{item.movie.genres}</td>
                            <td>{item.rating}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )}
</>
)
}


export default FavoritesBlock;
