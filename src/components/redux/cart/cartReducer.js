import {
  // ADD_TO_CART,
  CART_ITEMS_ERROR,
  CART_ITEMS_REQUEST,
  CART_ITEMS_SUCCESS,
} from "../constants/Constants";

const initialState = {
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

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {};
//     default:
//       return state;
//   }
// };
