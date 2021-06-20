import {
  CLEAR_ORDER_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "../constants/Constants";

const initialState = {
  loading: false,
  orders: [],
  error: "",
  order: {},
};

export const newOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload.order,
      };

    case CREATE_ORDER_FAIL:
      return {
        ...state,
        error: action.payload.response.data.message,
      };

    case CLEAR_ORDER_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const getMyOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.orders,
      };

    case GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message,
      };

    case CLEAR_ORDER_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
