import React from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Redux/postSlice";
import "../styles/Post.css";

const Post = ({ post }) => {
    const dispatch = useDispatch();

    const handleComment = () => {
        const comment = prompt("Enter your comment:");
        if (comment) dispatch(addComment({ postId: post.id, comment }));
    };

    return (
        <div className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <button className="post-button" onClick={handleComment}>Comment</button>
        </div>
    );
};

export default Post;
