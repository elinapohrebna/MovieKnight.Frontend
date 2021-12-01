import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    friendsContainer: {
        display: 'flex',
        overflowY: 'auto',
        overflowX: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '15vw',
        minWidth: 180,
        padding: '2% 1%',
        backgroundColor:'#a2505c',
        opacity: 1,
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
    text: {
        fontSize: 14,
        fontWeightLight: 200,
        fontWeightRegular: 300,
        htmlFontSize: 16,
        color: 'white',
        padding: 0,
        margin:0,
    },

    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50,
    },

});
