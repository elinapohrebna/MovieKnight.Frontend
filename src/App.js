import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import {Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClient, QueryClientProvider } from "react-query"
import theme from './styles/theme';
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer} from "react-toastify";
import configureStore from './redux/store';
import { getCurrentUser } from './api/user';
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import Home from "./components/home/home";
import Profile from "./pages/profile";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
if (typeof window !== "undefined") {
  injectStyle();
}

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    <CssBaseline />
    <ToastContainer />
  </ThemeProvider>
  </QueryClientProvider>
  </Provider>
  );
}
export const setAccessToken = (token = null) => {
  const accessToken = token;
};

App.getInitialProps = async context =>  {
  const appProps = await App.getInitialProps(context);
  try{
    const user = await getCurrentUser();
    console.log(user);
    const pageProps = { ...appProps, user };
    return {
      pageProps,
      initialState: {
        user,
      },
    };
  }
  catch (error) {
    setAccessToken();
    // destroy local token
  }
  return {
    pageProps: {},
    initialState: {
      token: null,
      user: null,
    },
  };

}

export default App;



