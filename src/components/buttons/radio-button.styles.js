import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        borderRadius: 16,
        borderColor: 'green',
        borderWidth: 10,
        backgroundColor: 'rgba(56,72,114,0.5)',
        margin: 2,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#9595c4',
            opacity: 0.85,
        },
    },
    checked: {
        position: 'relative',
        backgroundColor: '#9595c4',
        color: '#825dea',
        boxShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #825dea,\n' +
            '    0 0 15px #825dea,\n' +
            '    0 0 18px #825dea;\n',
        width: 12,
        height: 12,
        borderRadius: 12,
        '&:hover': {
            backgroundColor: '#29282D',
            opacity: 0.85,
        },
    },
})
