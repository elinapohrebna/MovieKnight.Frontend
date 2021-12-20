import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    wrapper: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#29282D'
    },
    adminBar: {
        display:'flex',
        flexDirection:'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%'
    },
    friendsContainer: {
        display: 'flex',
        overflow: 'scroll',
        overflowX: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '15vw',
        minWidth: 180,
        padding: '2% 1%',
        backgroundColor:'#615C60',
        opacity: 0.85,
        '&:hover': {
            backgroundColor: '#7D6460',
            opacity: 1,
        },
    },
    friendRow : {
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
    mainContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100vh',
        padding: '1% 2%',
    },
    topPanel: {
        display:'flex',
        width: '100%',
        height: 100,
        background: '#858585',
        borderRadius: 5,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    userBlock: {
        display: "flex",
        flexDirection: "row",
        height: '15vh',
        width: '80vw',
        marginTop: 10,
        alignContent: 'space-between'
    },
    avatar: {
       position: "relative",
        top: -30,
        left: 20,
        width: 120,
        height: 120,
        border: "7px solid #9595c4",
        boxShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 10px #9595c4,\n' +
            '    0 0 24px #9595c4;'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 40,
        color: '#F1EEE9',
    },
    username: {
        fontSize: 20,
        fontWeightLight: 200,
        fontWeightRegular: 600,
        htmlFontSize: 16,
        color: '#9595c4',
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
    },
    otherInfo: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 200,
        htmlFontSize: 16,
        color: '#F1EEE9',
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
    },
    watchHistoryVisibility: {
        fontSize: 14,
        padding: 0,
        margin:0,
        fontFamily: "Roboto",
        htmlFontSize: 16,
        fontWeightRegular: 200,
        fontWeightLight: 200,
    },
    watchHistoryConfiguration: {
        display: "flex",
    },
    editButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#6869AC',
        color: '#eeeeee',
        '&:hover': {
            backgroundColor: '#3b3b6e',
            opacity: 1,
        },
        marginLeft: 10,
        boxShadow: '0 0 3px #fff,\n' +
            '    0 0 6px #fff,\n' +
            '    0 0 9px #fff,\n' +
            '    0 0 12px #6869AC,\n' +
            '    0 0 15px #6869AC,\n' +
            '    0 0 18px #6869AC;\n',
    },
    blocksWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
    },
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
    privateCard :{
        marginTop: 100,
        marginLeft: 430,
        padding: 20,
        color: '#F1EEE9',
        boxShadow: '2px 2px 5px black inset'
    },
    select: {
        backgroundColor: '#9595c4',
        color: '#F1EEE9',
        height: '30px'
    },
    menuItem: {
        backgroundColor: '#6869AC',
        color: '#F1EEE9',
        height: '30px'
    }
});
