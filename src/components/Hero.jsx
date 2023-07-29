import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Hero = ({ posts, handlePostId }) => {
  const handleClick = (postId) => {
    handlePostId(postId);
  };

  return (
    <div class="container text-left h-100">
      <div class="row">
        {posts.map((post) => (
          <div
            key={post.postId}
            class="col-6 g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
          >
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">
                {new Date().toDateString()}
              </strong>
              <h3 class="mb-0">{post.postTitle}</h3>
              {post.postContent && (
                <p className="card-text mb-auto">
                  {post.postContent.substring(0, 100)}
                </p>
              )}
              <Link
                to={`/read-more/${post.postId}`}
                onClick={() => handleClick(post.postId)}
                class="icon-link gap-1 icon-link-hover"
              >
                Continue reading
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
