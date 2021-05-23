import {
  FETCH_REGISTER_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISER_ERROR,
  FETCH_REGISTER_REQUEST,
} from "../constants/serviceConstant";

const initialState = {
  user: {},
  loading: false,
  error: "",
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LOGIN_SUCCESS:
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case FETCH_LOGIN_ERROR:
    case FETCH_REGISER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
