import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const HomePage = ({ posts, handlePostId }) => {
  return (
    <div>
      <Header />
      <Hero posts={posts} handlePostId={handlePostId} />
    </div>
  );
};
