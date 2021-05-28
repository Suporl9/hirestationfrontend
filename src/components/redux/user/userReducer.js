import {
  FETCH_REGISTER_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISER_ERROR,
  FETCH_REGISTER_REQUEST,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "../constants/Constants";

const initialState = {
  user: {},
  loading: false,
  error: "",
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
    case FETCH_LOGIN_REQUEST:
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        user: {},
      };
    case LOAD_USER_SUCCESS:
    case FETCH_LOGIN_SUCCESS:
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: "",
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload.response.data.message,
      };

    case LOAD_USER_ERROR:
    case FETCH_LOGIN_ERROR:
    case FETCH_REGISER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
