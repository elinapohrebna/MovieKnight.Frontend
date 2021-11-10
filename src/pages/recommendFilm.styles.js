import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    wrapper: {
        display:'flex',
        minHeight: '100vh',
        flexDirection:'column',
        backgroundColor: '#eeeeee',
        padding: '50px',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    filmBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        display: 'flex',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        minHeight: '180px',
        minWidth: '100px',
        width: 'auto',
        height: '35vh',
        padding: '10px',
        resize: 'contain',
    },
    button: {
        margin: '10px',
    }
});
