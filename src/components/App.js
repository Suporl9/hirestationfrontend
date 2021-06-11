import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
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
import { ProtectedRoute } from "./route/ProtectedRoute";
// import { UpdateProfile } from "./Me/UpdateProfile";
import { UpdateForm } from "./Me/UpdateForm";
import { UpdatePassword } from "./Me/UpdatePassword";
import { ForgotPassword } from "./Me/ForgotPassword";
import { ResetPassword } from "./Me/ResetPassword";
import { MyWishList } from "./cart/MyWishList";
import { getCartItems } from "./redux/cart/cartActions";
import { OrderInfo } from "./orderAndPayment/OrderInfo";
import { OrderConfirm } from "./orderAndPayment/OrderConfirm";
import { OrderPayment } from "./orderAndPayment/OrderPayment";
// import store from "./store";

//as cors sends the credentials axios alloes the credentails(cookies or token) tto be saved in browser
// axios.defaults.withCredentials = true;
//this is like setting the cookies globally .

function App() {
  const dispatch = useDispatch();
  // const {cart}
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getCartItems());
  });
  // const { user } = useSelector((state) => state.auth);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:keyword" component={Home} />
        <Route path={`/category/:category`} component={Home} />

        <Route path="/welcome" component={Welcomepage} />

        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/me" exact component={MyProfile} />
        <ProtectedRoute path="/me/update" component={UpdateForm} />
        <ProtectedRoute
          path="/me/updatePassword"
          exact
          component={UpdatePassword}
        />
        <ProtectedRoute path="/myWishList" component={MyWishList} />
        <ProtectedRoute path="/order" exact component={OrderInfo} />
        <ProtectedRoute path="/order/confirm" component={OrderConfirm} />
        <ProtectedRoute path="/order/payment" component={OrderPayment} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/password/reset/:token" component={ResetPassword} />
        {/* when path:{service/:id} tried it shows error and goes to service/services/:id // so fix that error later on*/}
        {/* <Route path="services/:keyword" component={Home} /> */}
        <Route path="/:id" component={ServiceDetails} />
        {/* <Redirect from="/**" to="/welcome" /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
