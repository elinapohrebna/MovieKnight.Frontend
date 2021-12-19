import React, {useState}  from "react";
import toast from "../toast";
import {useQuery} from "react-query";
import {getAllUsers, deleteUser} from "../../api/user";
import {useStyles} from "./user-management.style";

const UserManagement = () => {
    const header = ["#", "UserName", "Email", "Registry Date", "Actions"]
    const [users, setUsers] = useState([]);
    const classes = useStyles();
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const {status, data, refetch } = useQuery("allUsers", getAllUsers, {
        onSuccess: () => {
            if (data) {
                setUsers(data);
                } else {
                refetch();
            }
        },
        onError: () => {
            notify("error", "An error occured, please reload this page!");
        },
    });

    const onDeleteBtnClick = async (userId) => {
        const resp = await deleteUser(userId)
        notify("success", "User was deleted successfully")
        var res = await getAllUsers()
        setUsers(res);
    }

    return (
        <>
        {status === "success" && (
            <table className={classes.userTable}>
                <thead>
                    <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
            <tbody>
            {Object.keys(users).map((k, i) => {
                let data = users[k];
                return (
                <tr className={classes.tableRow} key={i}>
                    <td>{i + 1}</td>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td>{((data.registryDate).split('T'))[0]}</td>
                    <td><button className={classes.deleteBtn} onClick={() => {onDeleteBtnClick(data.id)}}>Delete</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
        )}
        </>
    )
}

export default UserManagement;