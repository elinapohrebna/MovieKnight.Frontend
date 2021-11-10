import {AppBar, Avatar, Button, Icon, Link, Toolbar, Typography} from "@material-ui/core";
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
    const defPages = ['/login', '/register'];

    useEffect(() => {
       setCondition(!defPages.includes(location.pathname));
    }, [location])

    console.log(location.pathname);

    console.log(condition);
    if (condition) {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.logo} onClick={() => history.push("/home")}>
                            MovieKNight
                            <img src={movieKnight} width={50} height={50}/>
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/contact" className={classes.link}>
                            Recommendation
                            <MovieFilterIcon onClick={() => {history.push("/recommend");}}/>
                        </Link>
                        <Link to="/contact" className={classes.link}>
                            Profile
                            <PersonOutlineIcon onClick={() => {history.push("/profile");}}/>
                        </Link>
                        <Link to="/login" className={classes.link}>
                            <LogoutIcon onClick={() => {sessionStorage.removeItem('token');
                                history.push("/login");}}/>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        )
    } else {
        return null;
    }
}
export default Navbar;


