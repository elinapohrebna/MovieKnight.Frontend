import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    userTable: {
        textAlign: "center",
        border: "3px solid #F1EEE9",
        boxShadow: '1px 1px 10px #F1EEE9',
        color: '#F1EEE9',
        fontSize: 18,
        fontWeight: 200,
    },
    deleteBtn: {
        backgroundColor: "#7A3D3D",
        color: "#F1EEE9",
        border: "none",
        padding: "5px",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: '#d05a5a',
            textDecoration: "none",
            cursor: 'pointer',
        },
    },
    tableRow: {
        paddingLeft: '10px',
        fontWeight: 100,
        fontSize: 14,
        margin: "5px",
        backgroundColor: "#615C60",
        color: '#F1EEE9',
    }
});
