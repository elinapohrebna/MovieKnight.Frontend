import {AppBar, Avatar, Box, Button, Icon, Link, Toolbar, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useStyles} from "./navbar.styles";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import movieKnight from '../../assets/movieKnight.png';
import {useHistory, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory();
    const [condition, setCondition] = useState(false);
    const defPages = ['/login', '/register', '/'];
    const user = JSON.parse(sessionStorage.getItem('user'))?.userInfo;

    useEffect(() => {
       setCondition(!defPages.includes(location.pathname));
    }, [location])

    if (condition) {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                            MovieKNight
                            <img src={movieKnight} width={50} height={50}/>
                    </Typography>
                    <div className={classes.navlinks}>
                                { user?.role !== "Admin" && (<Typography
                                    className={classes.link}
                                    onClick={() => {history.push("/recommend");}}>
                                    Recommendation
                                    <MovieFilterIcon/>
                                </Typography>)}
                        <Typography
                            className={classes.link}
                            onClick={() => {history.push("/profile");}}>
                            Profile
                            <PersonOutlineIcon/>
                        </Typography>
                        <Typography
                            className={classes.link}
                            onClick={() => {sessionStorage.clear();
                                history.push("/home");}}>
                            <LogoutIcon/>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        )
    } else {
        return null;
    }
}
export default Navbar;


