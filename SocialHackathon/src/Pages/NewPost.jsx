import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Redux/postSlice";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return; 
    dispatch(addPost({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
