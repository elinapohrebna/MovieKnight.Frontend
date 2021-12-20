import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  paper: {
    padding: "30px 20px",
    width: 400,
    margin: "20px auto",
    marginTop: 100,
  },
  button: {
    marginTop: 10,
    marginRight: 10,
    marginBottom: 20,
    color: '#F1EEE9'
  },
  buttonAllign: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#6869AC",
  },
  container: {
    marginTop: 10,
  },
  typography: {
    fontSize: 20,
  },
  signUpBtn: {
    fontSize: "0.875rem",
  },
  text: {
    color: '#c8c6d2'
  },
  link: {
    color: '#6869AC',
  },
  textField: {
    "&::placeholder": {
      color: "#c8c6d2"
    },
    color: '#F1EEE9',
  }
});
