import React, { Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { ToastContainer } from "react-toastify";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

class App extends Component {
  render() {
    return (
      <div>
        <Root>
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Route path="*">Oops</Route>
          </Switch>
        </Root>
        
      </div>
    );
  }
}

export default App;
