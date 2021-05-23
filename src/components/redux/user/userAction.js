import axios from "axios";
import {
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISER_ERROR,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
} from "../constants/serviceConstant";

//login acion creator
export const Login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    //sends the header as json and not as html text //expects to get a json or xml body {"email": "testing@gmail.com",
    // "password": "password"}
    //Content-Type in the header of a HTTP request specifies to the server what data it should expect. If a server allows and accepts multiple types of content it can use this field know how to interpret the body of the request
    //applicaion/json only to be put in  post or  put request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await axios
      .post("/auth/login", { email, password }, config)
      .then((result) => result.data);

    dispatch({ type: FETCH_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_LOGIN_ERROR, payload: error });
  }
};

export const Register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_REGISTER_REQUEST });
    //multipart/form-data: each value is sent as a block of data ("body part"), with a user agent-defined delimiter ("boundary") separating each part. The keys are given in the Content-Disposition header of each part.
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const data = axios
      .post("/auth/new", userData, config)
      .then((result) => result.data);

    dispatch({ type: FETCH_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_REGISER_ERROR, payload: error });
  }
};
