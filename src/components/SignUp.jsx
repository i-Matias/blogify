import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom

export const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    console.log(formData);
    axios
      .post("/signup", formData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      })
      .then((response) => {
        console.log(response.data);
        history.push("/loggedin");
      })
      .catch((error) => console.error("Error signing up:", error));
  };

  return (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="" action="/signup" method="POST">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="button"
                onClick={handleSignUp}
              >
                Sign up
              </button>
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
              <hr className="my-4" />
              <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
              <button
                className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                type="button"
              >
                <svg className="bi me-1" width="16" height="16">
                  <use xlinkHref="#google"></use>
                </svg>
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
