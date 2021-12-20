import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        width: 520,
        backgroundColor: '#F1EEE9',
        border: '1 solid #29282D',
        borderRadius: 5,
        padding: 20,

    },
    search:{
        width: 450,
    },
    buttonDelete:{
        backgroundColor: "#7A3D3D",
        flex: 1,
        alignSelf: 'center',
        marginLeft: '50%',
        marginTop: 10,
        transform: 'translate(-50%, 0%)',
    },
    error: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 200,
        color: '#7A3D3D',
        padding: 5,
        margin:0,
        fontFamily: "Roboto",
    },
});
