import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost, addComment } from "../Redux/postSlice";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleAddComment = (postId) => {
    if (commentText.trim() === "") return;
    dispatch(addComment({ postId, comment: commentText }));
    setCommentText("");
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      {posts.length === 0 ? <p>No posts found.</p> : (
        <div className="post-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              

              <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>


              <div className="comment-section">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)} 
                />
                <button className="comment-btn" onClick={() => handleAddComment(post.id)}>Comment</button>
              </div>


              <div className="comments-list">
                {post.comments && post.comments.length > 0 ? (
                  post.comments.map((comment, index) => (
                    <p key={index} className="comment">{comment}</p>
                  ))
                ) : <p className="no-comments">No comments yet.</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
