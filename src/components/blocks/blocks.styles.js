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
        height: 160,
        padding: 0,
    },
});
