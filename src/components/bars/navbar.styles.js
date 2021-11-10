import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    navlinks: {
        marginLeft: '10px',
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: "20px",
        "&:hover": {
            color: 'pink',
            textDecoration: "none",
        },
    },
});
