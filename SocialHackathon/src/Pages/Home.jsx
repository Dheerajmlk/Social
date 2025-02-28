import React from "react";
import { useSelector } from "react-redux";
import Post from "../Components/Post";
import "../styles/Home.css";

const Home = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="home-posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
