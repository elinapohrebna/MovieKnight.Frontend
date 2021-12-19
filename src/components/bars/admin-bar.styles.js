import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    barWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        margin: '10px',
        backgroundColor: 'rgb(230, 202, 112)',
        padding: '10px',
        borderRadius: '10px',
        color: 'blue',
        fontSize: '1.3em'
    },
    adminNavbarItem: {
        padding: '5px',
        textDecoration: "none",
        "&:hover": {
            color: 'rgb(8, 11, 87)',
            textDecoration: "none",
            cursor: 'pointer',
        }
    },
});
