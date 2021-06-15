import {
  CLEAR_ORDER_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/Constants";

const initialState = {
  loading: false,
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
