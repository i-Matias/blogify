import React from "react";

export const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="post" className="nav-link px-2 link-secondary">
              Post
            </a>
          </li>
          <li>
            <a href="/" className="nav-link px-2">
              Home
            </a>
          </li>
          <li>
            <a href="about" className="nav-link px-2">
              About
            </a>
          </li>
          <li>
            <a href="contact" className="nav-link px-2">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};
