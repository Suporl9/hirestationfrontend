import {
  CLEAR_ERROR,
  FETCH_ERROR,
  FETCH_SERVICES,
  FETCH_SUCCESS,
} from "../constants/serviceConstant";

const initialState = {
  loading: false,
  services: [],
  error: null,
};
const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.getServices,
        servicesCount: action.payload.servicesCount,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default serviceReducer;
