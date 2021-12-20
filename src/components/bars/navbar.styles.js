import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    bar: {
        backgroundColor: '#29282D',
    },
    navlinks: {
        marginLeft: '10px',
        display: "flex",
    },
    logo: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexGrow: "1",
        cursor: "default",
        color: '#FF10F0',
        gap: '10px',
        textShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #FF10F0,\n' +
            '    0 0 15px #FF10F0,\n' +
            '    0 0 18px #FF10F0;\n'
    },
    link: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        textDecoration: "none",
        color: "#F1EEE9",
        fontSize: "20px",
        marginLeft: "20px",
        "&:hover": {
            color: '#9595c4',
            textDecoration: "none",
            cursor: 'pointer',
        },
    },
});
