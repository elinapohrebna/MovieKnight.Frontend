import React, {useState} from "react";
import {useStyles} from "./blocks.styles";


const FavoritesFriendBlock = ({watchHistory}) => {
    const classes = useStyles();
    const [history, setHistory] = useState([]);


    return(
        <>
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
                {watchHistory.map((item, i) => {
                    console.log(item);
                    return (
                        <tr key={item.id}>
                            <td>{i+1}</td>
                            <td>{item.movie.title}</td>
                            <td>{item.movie.genres}</td>
                            <td>{item.rating}</td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
</>
)
}


export default FavoritesFriendBlock;
