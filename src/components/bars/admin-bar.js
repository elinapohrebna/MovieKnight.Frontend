import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {useStyles} from "./admin-bar.styles";

const AdminBar = () => {
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory();
    const [condition, setCondition] = useState(false);
    const defPages = ['/login', '/register', '/'];

    useEffect(() => {
        setCondition(!defPages.includes(location.pathname));
     }, [location])
     
     
    if (condition) {
        return (
            <div className={classes.wrapper}>
                <div>Users management</div>
                <div>Comments management</div>
            </div>
        )
    }else {
        return null;
    }
}

export default AdminBar;