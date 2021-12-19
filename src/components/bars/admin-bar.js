import React from "react";
import {useStyles} from "./admin-bar.styles";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import UserManagement from "../blocks/user-management";
import CommentsManagement from "../blocks/comments-management";

const AdminBar = () => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
     
        return (
            <div className={classes.wrapper}>
                <div className={classes.barWrapper}>
                    <div>
                        <Link className={classes.adminNavbarItem} to={`${url}/users-management`}>Users management</Link>
                    </div>
                    <div>
                        <Link className={classes.adminNavbarItem} to={`${url}/comments-management`}>Comments management</Link>
                    </div>
                </div>
                <Switch>
                    <Route path={`${path}/users-management`}>
                        <UserManagement />
                    </Route>
                    <Route path={`${path}/comments-management`}>
                        <CommentsManagement />
                    </Route>
                </Switch>
            </div>
        )
}

export default AdminBar;