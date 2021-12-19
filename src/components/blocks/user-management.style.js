import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    userTable: {
        textAlign: "center",
        border: "3px solid #ddd",
    },
    deleteBtn: {
        backgroundColor: "tomato",
        color: "white",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: 'red',
            textDecoration: "none",
            cursor: 'pointer',
        },
    },
    tableRow: {
        margin: "5px",
        backgroundColor: "#ddd"
    }
});
