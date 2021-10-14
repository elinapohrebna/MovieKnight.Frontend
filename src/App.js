import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Switch, Route, Redirect, Router} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { QueryClient, QueryClientProvider } from "react-query"
import theme from './styles/theme';
import { Provider } from 'react-redux';
import Login from './components/forms/login';
import "react-toastify/dist/ReactToastify.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer} from "react-toastify";
import configureStore from './redux/store'
import {PropTypes} from "prop-types";
import { getCurrentUser } from './api/user'

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
    <CssBaseline />
    <ToastContainer />
   <Login />
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



