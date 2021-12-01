import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    movieText: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 200,
        htmlFontSize: 16,
        color: 'black',
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
    },
    text: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        htmlFontSize: 16,
        color: 'white',
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
        backgroundColor: "white",
        margin: 10,
        paddingTop: 12,
        paddingLeft: 25,
        paddingBottom: 12,
        paddingRight: 25,
        borderRadius: 5,
        boxShadow: '0px 0px 10px lightgray',
        overflow: 'scroll',
        overflowX: 'hidden',
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
        color: 'black',
        padding: 0,
        margin:0,
    },
    blockTitle: {
        fontSize: 18,
        fontWeightLight: 200,
        fontWeightRegular: 200,
        htmlFontSize: 20,
        color: 'black',
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
    },
    button: {
        width: '50%',
        height: '2%',
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: '6vh',
        background: '#eeeeee',
        borderRadius: 5,
        padding: 0,
    },
    chart: {
        display: "flex",
        width:400,
        height: 150,
        padding: 0,
    },
    item: {
        height: '20%',
    },
    friendsContainer: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '15vw',
        minWidth: 180,
        minHeight: '20%',
        padding: '2% 1%',
        backgroundColor:'#a2505c',
        opacity: 1,
        '&:hover': {
            backgroundColor: '#a2505c',
            opacity: 0.85,
        },
    },
    friendRow : {
        paddingLeft: '30px',
        minWidth: '6vw',
        maxWidth: '15vw',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#000000',
        fontSize: 12,
    },

    buttonDelete:{
        backgroundColor: "#db330d",
        width: "18px",
        height: "15px"
    },

    friendName: {
        "&:hover": {
            textDecoration: "none",
            cursor: 'pointer',
        },
    }
});
