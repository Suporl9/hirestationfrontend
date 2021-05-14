//create an fuction with side effect//because of he thunk middleware
import axios from "axios";

import {
  CLEAR_ERROR,
  FETCH_ERROR,
  FETCH_SERVICES,
  FETCH_SUCCESS,
} from "../constants/serviceConstant"; //importing the constants for dispatching the actions

export const getAllServices = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_SERVICES }); //set the loading to true

    const data = await axios.get("/services").then((result) => result.data);
    //get the data from the backend and set it to const data
    // const { data } = await axios.get("/services");
    dispatch({
      //after getting the data pass it with payload to the reducer
      type: FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //if any error dispatch the action "FETCH_ERROR" and display the error
    dispatch({
      type: FETCH_ERROR,
      payload: error.message,
    });
  }
};

//function to clear the errors  if every thing was a success
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
