import React, { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Post = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({ postTitle: "", postContent: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/blog/post", post, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10">
            <form action="/" method="post">
              <div className="form-group">
                <label htmlFor="post-title">Title</label>
                <input
                  type="text"
                  name="postTitle"
                  id="post-title"
                  autoComplete="off"
                  value={post.postTitle}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="post-body">Content</label>
                <textarea
                  name="postContent"
                  id="post-body"
                  cols="30"
                  rows="5"
                  value={post.postContent}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                name="button"
                onClick={handleClick}
              >
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
