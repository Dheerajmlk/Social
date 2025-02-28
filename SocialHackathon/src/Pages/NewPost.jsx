import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../Redux/postSlice";
import "../styles/NewPost.css";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ id: Date.now(), title, description }));
        setTitle("");
        setDescription("");
    };

    return (
        <div className="newpost-container">
            <h1 className="newpost-title">New Post</h1>
            <form className="newpost-form" onSubmit={handleSubmit}>
                <input className="newpost-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <textarea className="newpost-textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                <button className="newpost-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPost;
