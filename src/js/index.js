import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import "../sass/application.scss";

import store from "./store"

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute name="home" component={Home}></IndexRoute>
        <Route path="user/:username" name="user" component={User}></Route>
        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>
, app);
