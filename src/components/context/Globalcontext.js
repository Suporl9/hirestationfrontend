import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
export const userContext = React.createContext();

function Globalcontext({ children }) {
  const [loggedIn, setLoggedIn] = useState(undefined); //setting this to undefined as there wont be any true or false values at the start!

  const getLoggedIn = async () => {
    const loggedInResp = await axios.get("http://localhost:5000/auth/loggedin");
    setLoggedIn(loggedInResp.data); //if we want to get the response with axios.get we will have to retrieve it as response.data
  };

  useEffect(() => {
    getLoggedIn(); //when the browser is loaded the getLoggedin function will run and check the response data which will be token in our case!
  }, []);

  return (
    <userContext.Provider
      value={{
        loggedIn, //passing values in global provider
        getLoggedIn,
      }}
    >
      {/* now every children will be under the usercontext.provider and can consume all the data passed down as the value */}
      {children}
    </userContext.Provider>
  );
}
Globalcontext.propTypes = {
  //this is prototype with which we are validating the props .we can also validate srings and numbers if we want to use in props like this {name,age}
  children: PropTypes.node.isRequired,
};
export default Globalcontext;
