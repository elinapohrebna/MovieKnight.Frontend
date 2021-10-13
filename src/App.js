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

const store = configureStore();

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

export default App;
