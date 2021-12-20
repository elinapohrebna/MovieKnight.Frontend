import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    movieText: {
        fontSize: 14,
        htmlFontSize: 16,
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
        color: '#F1EEE9',
        fontWeight: 200,
    },
    text: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        htmlFontSize: 16,
        color: '#F1EEE9',
        padding: 0,
        margin:0,
    },
    blockInformation: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        minWidth: 500,
        minHeight: '2vh',
        maxHeight: 200,
        backgroundColor: "#29282D",
        margin: 10,
        paddingTop: 12,
        paddingLeft: 25,
        paddingBottom: 12,
        paddingRight: 25,
        borderRadius: 5,
        boxShadow: '3px 3px 5px black inset',
        overflow: 'scroll',
        scrollbarColor: '#615C60 #9595c4',
        overflowX: 'hidden',
        color: '#F1EEE9'
    },
    table: {
        textAlign: 'left',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
    },
    tableTitle: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        htmlFontSize: 16,
        color: '#F1EEE9',
        padding: 0,
        margin:0,
    },
    blockTitle: {
        fontSize: 18,
        fontWeightLight: 200,
        fontWeightRegular: 200,
        height: '40px',
        verticalAlign: 'middle',
        padding: 10,
        margin:0,
        fontFamily: "Roboto",
        color: '#825dea',
        textShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #825dea,\n' +
            '    0 0 15px #825dea,\n' +
            '    0 0 18px #825dea;\n'
    },
    button: {
        width: '50%',
        height: '2%',
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: '6vh',
        background: '#F1EEE9',
        borderRadius: 5,
        padding: 0,
    },
    chart: {
        display: "flex",
        width:400,
        height: 150,
        padding: 0,
        backgroundColor: 'transparent',

        color: '#F1EEE9',
    },
    item: {
        height: '20%',
        color: '#F1EEE9',
    },
    friendsContainer: {
        display: 'flex',
        overflowY: 'auto',
        overflowX: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '15vw',
        minWidth: 180,
        minHeight: '20%',
        padding: '2% 1%',
        backgroundColor:'#615C60',
        opacity: 1,
    },
    friendRow : {
        width: '100%',
        paddingLeft: '30px',
        paddingRight: '30px',
        minWidth: '6vw',
        maxWidth: '15vw',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#F1EEE9',
        fontSize: 12,
        fontWeight: 200,
        '&:hover': {
            backgroundColor: '#7D6460',
            opacity: 0.5,
        },
    },

    buttonDelete:{
        backgroundColor: "#7a3d3d",
        width: "18px",
        height: "20px",
        fontWeight: 100,
        borderRadius: '10px',
        color: '#F1EEE9',
        '&:hover': {
            backgroundColor: '#d05a5a',
            opacity: 0.85,
        },
    },

    friendName: {
        "&:hover": {
            textDecoration: "none",
            cursor: 'pointer',
        },
    }
});
