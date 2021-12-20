import { makeStyles } from "@material-ui/core/styles";
import bgImage from '../../assets/home-bg.jpg';

export const useStyles = makeStyles({
    welcomePage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        height: "100vh",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: "aliceblue",
        backgroundColor: "#2c2c5b",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    header: {
        margin: "0px",
        padding: "10px",
        fontSize: "5em",
    },
    bar: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    signInBtn: {
        padding: "10px",
        borderRadius: "5px",
        borderStyle: "none",
        "&:hover": {
            backgroundColor: '#F1EEE9',
            cursor: 'pointer',
        }
    },
    signUpBtn: {
        marginLeft: "15px",
        padding: "10px",
        borderRadius: "5px",
        borderStyle: "none",
        backgroundColor: "#9595C4",
        "&:hover": {
            backgroundColor: '#6869AC',
            cursor: 'pointer',
        }
    },
    mainContent: {
        alignSelf: "center",
        padding: "50px"
    },
    mainText: {
        fontSize: "2em",
        textAlign: "center",
    },
    footer: {
    },
    footerText: {
        textAlign: "center",
    }
});
