import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  paper: {
    padding: "20px 20px",
    width: 500,
    margin: "10px auto",
    color: '#F1EEE9'
  },
  button: {
    marginTop: 10,
  },


  textField: {
    "&::placeholder": {
      color: "#c8c6d2"
    },
    color: '#F1EEE9',
  }
});
