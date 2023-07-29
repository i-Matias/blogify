import "./App.css";
import { useState, useEffect } from "react";
import { HomePage } from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./components/Post";
import { ReadMore } from "./components/ReadMore";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([{}]);
  const [selectedPostId, setSelectedPostId] = useState(0);

  const handlePostId = (postId) => {
    setSelectedPostId(postId);
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/blog");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage posts={posts} handlePostId={handlePostId} />}
        />
        <Route path="/post" element={<Post />} />
        <Route
          path="read-more/:selectedPostId"
          element={<ReadMore selectedPostId={selectedPostId} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
