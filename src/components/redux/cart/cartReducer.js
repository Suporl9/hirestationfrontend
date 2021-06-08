import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_ISADDED_RESET,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  CART_ITEMS_ERROR,
  CART_ITEMS_REQUEST,
  CART_ITEMS_SUCCESS,
  CLEAR_MESSAGE,
  DELETE_CART_ITEMS_ERROR,
  DELETE_CART_ITEMS_REQUEST,
  DELETE_CART_ITEMS_SUCCESS,
} from "../constants/Constants";

const initialState = {
  // cartItem: {},
  // cartItemsCount: "",
  cartItems: [],
  loading: false,
  error: null,
};

export const getCartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload.myCartItems,
        cartItemsCount: action.payload.cartItemsCount,
      };

    case CART_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CART_ITEMS_REQUEST:
      return {
        ...state,
        loadingg: true,
      };

    case DELETE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loadingg: false,
        message: action.payload.message,
      };

    case DELETE_CART_ITEMS_ERROR:
      return {
        ...state,
        loadingg: false,
        error: action.payload,
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loadin: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loadin: false,
        cartItem: action.payload.cart,
        isAdded: action.payload.sucess,
      };
    case ADD_TO_CART_ISADDED_RESET:
      return {
        ...state,
        loadin: false,
        isAdded: false,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        loadin: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
