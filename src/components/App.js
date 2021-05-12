import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { userContext } from "./context/Globalcontext";
import Login from "./LoginandRegister/Login";

import SignUp from "./LoginandRegister/SignUp";

import welcomepage from "./welcomepage/welcomepage";
// import Footer from "./welcomepage/welcomepagecoponents/Footer";
// import Navbar from "./welcomepage/welcomepagecoponents/NavBar";
import axios from "axios";
import dashboard from "./Dashboard/dashboard";

//as cors sends the credentials axios alloes the credentails(cookies or token) tto be saved in browser
axios.defaults.withCredentials = true;
//this is like setting the cookies globally .

function App() {
  const { loggedIn } = useContext(userContext); //cant destructure or something like  that error
  return (
    // <Globalcontext>
    <Router>
      <Switch>
        {loggedIn === true && (
          <>
            <Route path="/" exact component={dashboard} />
            <Redirect from="/**" to="/" />
          </>
        )}

        {loggedIn === false && (
          <>
            <Redirect from="/" to="/welcome" />
            <Route path="/welcome" component={welcomepage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </>
        )}
      </Switch>
    </Router>
    // </Globalcontext>
  );
}

export default App;
