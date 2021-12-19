import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import {Route, Switch, Redirect} from 'react-router-dom'
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
import ConfirmMailPage from './pages/confirmEmail'
import HomePage from './pages/homePage'
import InfoMailPage from './pages/emailInfoPage'
import Profile from "./pages/profile";
import RecommendFilm from "./pages/recommendFilm";
import Navbar from "./components/bars/navbar";
import FriendProfile from './pages/friend-profile-page'
import {useLocation} from "react-router-dom";


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
  const location = useLocation();
  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      {(location.pathname !== "/home" && location.pathname !== "/") && <Navbar />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path='/confirmationMail'>
          <ConfirmMailPage />
        </Route>
        <Route path='/infoMail'>
          <InfoMailPage />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/recommend'>
          <RecommendFilm />
        </Route>
        <Route path='/friend'>
        <FriendProfile />
      </Route>
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



