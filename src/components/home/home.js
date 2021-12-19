import React, {useEffect, useState} from "react";
import {useStyles} from "./home.styles";
import {useHistory, useLocation} from "react-router-dom";

const HomeComponent = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    const [condition, setCondition] = useState(false);
    const defPages = ['/login', '/register'];

    useEffect(() => {
        setCondition(!defPages.includes(location.pathname));
     }, [location])

     if (condition) {
        return (
            <div className={classes.welcomePage}>
                <div className={classes.bar}>
                    <div>
                        <h1 className={classes.header}>Welcome to MovieKNight!</h1>
                    </div>
                    <div>
                        <button 
                         onClick={() => {history.push("/login");}}
                         className={classes.signInBtn}>Sign In</button>
                        <button
                         onClick={() => {history.push("/register");}}
                         className={classes.signUpBtn}>Sign Up</button>
                    </div>
                </div>
                <div className={classes.mainContent}>
                    <p className={classes.mainText}>Tired of spending hours choosing a movie? With MovieKNight, you will spend time not searching, but watching a movie.</p>
                </div>
                <div classname={classes.footer}>
                    <p className={classes.footerText}>MovieKnight© 2021</p>
                </div>
            </div>
        )
     } else {
         return null;
     }
}

export default HomeComponent;
