import axios from "axios";
import {
  CLEAR_ORDER_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "../constants/Constants";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await axios
      .post("/order/new", order, config)
      .then((resp) => resp.data);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error,
    });
  }
};

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const data = await axios.get("/order/me").then((resp) => resp.data);

    dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAIL, payload: error });
  }
};

export const clearOrderError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ORDER_ERROR });
};
