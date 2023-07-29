import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { useNavigate } from "react-router-dom";

export const ReadMore = ({ selectedPostId }) => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    postId: 0,
    postTitle: "",
    postContent: "",
  });

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postId = selectedPostId;
        const response = await axios.get(
          `http://localhost:8080/api/v1/blog/post/read-more/${postId}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPostData();
  }, [selectedPostId]);

  const handleDeletePost = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/blog/delete/${post.postId}`
      );
      navigate("/");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 mx-lg-4">
        {Object.keys(post).length > 0 && (
          <div key={post.postId}>
            <DeleteForeverTwoToneIcon
              onClick={handleDeletePost}
              style={{ cursor: "pointer" }}
            />
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              {post.postTitle}
            </h1>
            <p className="lead">{post.postContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};
