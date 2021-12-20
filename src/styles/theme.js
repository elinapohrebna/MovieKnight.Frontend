import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#615C60",
      light:"#7D6460",
      dark:"#29282D",
      contrastText: "#F1EEE9",
    },
    contrastText: "#F1EEE9",
    secondary: {
      main: "#6869AC",
      light: "#9595c4",
      dark: "#3b3b6e",
      contrastText: "#29282D",
    },
    background: {
      default: "#29282D",
      paper: "#29282D",
    },
  },
  root: { flexGrow: 1, fontFamily: "Roboto" },
  page: {
    position: "relative",
    marginTop: 20,
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    htmlFontSize: 16,
    color: '#F1EEE9',
  },
  overrides: {
    MuiInput: {
      "&::placeholder": {
        color: "#c8c6d2"
      },
      color: '#F1EEE9',
      }
    }
});

export default theme;
