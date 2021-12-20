import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '30px',
    },
    barWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        borderRadius: '10px',
        gap: '55px',
    },
    adminNavbarItem: {
        border: '3px solid #6869AC',
        boxShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #6869AC,\n' +
            '    0 0 15px #6869AC,\n' +
            '    0 0 18px #6869AC;\n',
        padding: '10px',
        borderRadius: '10px',
        margin: '5px',
        textDecoration: "none",
        color: '#825dea',
        fontWeight: 500,
        fontSize: 20,
        textShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #825dea,\n' +
            '    0 0 15px #825dea,\n' +
            '    0 0 18px #825dea;\n',
        "&:hover": {
            color: '#2c2c5b',
            textDecoration: "none",
            cursor: 'pointer',
        }
    },
});
