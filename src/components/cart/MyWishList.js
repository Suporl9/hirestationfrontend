import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../layout/Loader";
import { getCartItems } from "../redux/cart/cartActions";
import { ReactComponent as Bin } from "./ntrash.svg";

export const MyWishList = () => {
  const dispatch = useDispatch();
  const { loading, cartItems, cartItemsCount } = useSelector(
    (state) => state.getCart
  );

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className="bg">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="myprofilebody1">
            <div className="h1andmyitemscardleft">
              <span style={{ fontWeight: "bold", fontSize: "30px" }}>
                My WishList:
              </span>
              <div className="myitemscardleft">
                <div className="gigstitleandphoto">
                  {cartItems &&
                    cartItems.map((cartItem) => (
                      <div key={cartItem._id} className="cardleft">
                        <div className="titleandphoto">
                          <img
                            src={cartItem.service.images[0].url}
                            alt="gig"
                            style={{
                              height: "100px",
                              width: "120px",
                              borderRadius: "5px",
                            }}
                          />
                          <span className="titlerow">
                            {cartItem.service.title}
                          </span>
                        </div>

                        <h2 style={{ marginTop: "20px" }}>
                          Rs.{cartItem.service.price}
                        </h2>
                        <div className="btns">
                          <button className="binclass">
                            <Bin />
                          </button>
                          <button
                            className="card-btn1"
                            style={{ marginLeft: "5%" }}
                          >
                            Order Now!
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="myitemscardright">
              <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                Summary:
              </span>
              <div className="hl" style={{ marginBottom: "10%" }}></div>
              <div className="subtotal">
                <h5 className="h6bold">Subtotal:</h5>
                <h5 className="h6bold">{cartItemsCount}(units)</h5>
              </div>
              <div className="subtotal">
                <h5 className="h6bold">Total Price:</h5>
                <h5 className="h6bold">
                  Rs.
                  {cartItems.reduce((acc, item) => item.service.price + acc, 0)}
                </h5>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
