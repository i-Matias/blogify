import React, { useState } from "react";

export const FormContact = () => {
  const [emailFormData, setEmailFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {};
  // todos use axios to fetch your spring boot route and pass the form data so it can be send throught email
  return (
    <div className="content mt-4">
      <div className="container">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div className="col-md-12">
            <div className="form h-100">
              <form
                className="mb-5"
                action="/"
                id="contactForm"
                name="contactForm"
                noValidate
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="name" className="col-form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control  border-0 border-bottom"
                      name={emailFormData.name}
                      id="name"
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="email" className="col-form-label">
                      Email *
                    </label>
                    <input
                      type="text"
                      className="form-control border-0 border-bottom "
                      name={emailFormData.email}
                      id="email"
                      onChange={handleChange}
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="message" className="col-form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control border-0 border-bottom"
                      name={emailFormData.message}
                      id="message"
                      cols="30"
                      rows="4"
                      onChange={handleChange}
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input
                      type="button"
                      value="Send Message"
                      onClick={handleClick}
                      className="btn btn-success rounded-pill py-2 px-4"
                    />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
