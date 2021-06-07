import axios from "axios";
import {
  // ADD_TO_CART,
  CART_ITEMS_ERROR,
  CART_ITEMS_REQUEST,
  CART_ITEMS_SUCCESS,
} from "../constants/Constants";

export const getCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: CART_ITEMS_REQUEST });

    const data = await axios
      .get("/cart/getMyCartItems")
      .then((resp) => resp.data);

    console.log(data);

    dispatch({ type: CART_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CART_ITEMS_ERROR, payload: error });
  }
};

// export const addItemToCart = (id) => async (dispatch) => {
//   const data = await axios
//     .get(`/services/${id}`)
//     .then((response) => response.data);

//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       service: data.getService._id,
//       title: data.getService.title,
//       price: data.getService.price,
//       image: data.getService.images[0].url,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify());
// };
