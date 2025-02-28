import React from "react";
import { useSelector } from "react-redux";
import Post from "../Components/Post";

const Home = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h1>Home</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;