import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "../style";
import Home from "./Home";
import Charts from "./Charts";
import Nav from "./Nav";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import useLocalStorage from "../hooks/useLocalStorage";
import api from "../api";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const isUserAuthenticated = useLocalStorage(api);

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(login());
    }
  }, [isUserAuthenticated, dispatch]);
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute>
            <Route path="/charts" component={Charts} />
          </PrivateRoute>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
