import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <main>
      <Header />
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="dark"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="70vh"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#EEEEEE"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Sign Up Today and Join the Community!</h1>
                <p className="opacity-75">
                  Don't miss out on the latest updates and exclusive content! By
                  signing up today, you'll become a part of our vibrant
                  community of like-minded individuals who share a passion for
                  knowledge and meaningful discussions. Join us on this exciting
                  journey and stay connected.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary">Sign up today</a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="70vh"
              xmlns="http://ww w.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#EEEEEE"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Learn More About Us</h1>
                <p>
                  Curious to know who's behind this blog? Our team of dedicated
                  writers and enthusiasts work tirelessly to bring you
                  inspiring, informative, and entertaining posts. To learn more
                  about our mission, vision, and the minds shaping this
                  platform, click below.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="70vh"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#EEEEEE"></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Welcome to our Blog!</h1>
                <p>
                  Thanks for visiting our blog! Here, you'll discover a diverse
                  range of captivating articles, covering topics from lifestyle,
                  technology, and travel to health, entertainment, and more. So,
                  grab a cup of your favorite beverage, sit back, and browse
                  through our engaging content.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer />
    </main>
  );
};
