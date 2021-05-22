import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { userContext } from "./context/Globalcontext";
import Login from "./LoginandRegister/Login";

import SignUp from "./LoginandRegister/SignUp";

// import Footer from "./welcomepage/welcomepagecoponents/Footer";
// import Navbar from "./welcomepage/welcomepagecoponents/NavBar";
// import axios from "axios";

import Navbar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Welcomepage from "./welcomepage/welcomepage";
import ServiceDetails from "./service/ServiceDetails";

//as cors sends the credentials axios alloes the credentails(cookies or token) tto be saved in browser
// axios.defaults.withCredentials = true;
//this is like setting the cookies globally .

function App() {
  // const { loggedIn } = useContext(userContext); //cant destructure or something like  that error
  return (
    // <Globalcontext>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:keyword" component={Home} />
        <Route path={`/category/:category`} component={Home} />
        {/* <Redirect from="/**" to="/" /> */}

        {/* <Redirect from="/" to="/welcome" /> */}
        <Route path="/welcome" component={Welcomepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        {/* when path:{service/:id} tried it shows error and goes to service/services/:id // so fix that error later on*/}
        {/* <Route path="services/:keyword" component={Home} /> */}
        <Route path="/:id" component={ServiceDetails} />
      </Switch>
      <Footer />
    </Router>
    // </Globalcontext>
  );
}

export default App;
