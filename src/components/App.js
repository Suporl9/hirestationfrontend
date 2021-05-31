import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./LoginandRegister/Login";

import SignUp from "./LoginandRegister/SignUp";

import Navbar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Welcomepage from "./welcomepage/welcomepage";
import ServiceDetails from "./service/ServiceDetails";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/user/userAction";
import { MyProfile } from "./Me/MyProfile";
// import store from "./store";

//as cors sends the credentials axios alloes the credentails(cookies or token) tto be saved in browser
// axios.defaults.withCredentials = true;
//this is like setting the cookies globally .

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  // const { user } = useSelector((state) => state.auth);
  return (
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
        <Route path="/me" exact component={MyProfile} />

        {/* when path:{service/:id} tried it shows error and goes to service/services/:id // so fix that error later on*/}
        {/* <Route path="services/:keyword" component={Home} /> */}
        <Route path="/:id" component={ServiceDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
