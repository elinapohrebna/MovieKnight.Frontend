import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00acc1",
      contrastText: "#ffffff",
    },
    contrastText: "#ffffff",
    secondary: {
      main: "#de041e",
      light: "#ffcdd2",
      dark: "#b26e59",
      contrastText: "rgba(0,0,0,0.89)",
    },
    background: {
      default: "#f5f7f7",
      paper: "#ffffff",
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
  },
});

export default theme;