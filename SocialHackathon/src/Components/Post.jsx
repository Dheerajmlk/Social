import React from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Redux/postSlice";
import "../styles/Post.css"

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const handleComment = () => {
        const comment = prompt("Enter your comment:");
        if (comment) dispatch(addComment({ postId: post.id, comment }));
    };

    return (
        <div className="border p-2 mb-2">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button onClick={handleComment}>Comment</button>
        </div>
    );
};

export default Post;