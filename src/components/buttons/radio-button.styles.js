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
        backgroundColor: '#702433',
        margin: 2,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#6180a6',
            opacity: 0.85,
        },
    },
    checked: {
        position: 'relative',
        backgroundColor: '#cb8d94',
        width: 12,
        height: 12,
        borderRadius: 12,
        '&:hover': {
            backgroundColor: '#6180a6',
            opacity: 0.85,
        },
    },
})
