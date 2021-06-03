import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../redux/user/userAction";

export const ForgotPassword = () => {
  const { message, loading, error } = useSelector(
    (state) => state.forgotPasswordReducer
  );
  const dispatch = useDispatch();
  const alert = useAlert();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success(message);
    }
  }, [message, alert, error, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };
  return (
    <div className="bg2">
      <div className="pwcarddiv">
        <div className="passwordcard">
          <form onSubmit={submitHandler}>
            <h5 className="h6bold" style={{ marginBottom: "5%" }}>
              Enter your Email:
            </h5>
            <input
              type="email"
              className="oldPassword"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              className="card-btn"
              type="submit"
              style={{
                padding: "9px 25px",
                backgroundColor: "#fd4c4c",
                textTransform: "uppercase",
                fontWeight: "900",
                borderStyle: "none",
                borderRadius: "5px",
                outline: "none",
                textShadow: "#000 2px",
                fontSize: "20px",
              }}
              disabled={loading ? true : false}
            >
              REQUEST MAIL
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
